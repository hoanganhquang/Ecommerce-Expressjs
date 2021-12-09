const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// const busboyBodyParser = require("busboy-body-parser");
// const fileUpload = require("express-fileupload");

// Router
const homeRouter = require("./routes/index");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const paymentRouter = require("./routes/payment");
const voucherRouter = require("./routes/voucher");
const dbRouter = require("./routes/dashboard");
const profileRouter = require("./routes/profile");
const cartRouter = require("./routes/cart");

const app = express();

app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));
hbs.registerHelper("when", function (operand_1, operator, operand_2, options) {
  const operators = {
    eq: function (l, r) {
      return l == r;
    },
    noteq: function (l, r) {
      return l != r;
    },
    gt: function (l, r) {
      return Number(l) > Number(r);
    },
    or: function (l, r) {
      return l || r;
    },
    and: function (l, r) {
      return l && r;
    },
    "%": function (l, r) {
      return l % r === 0;
    },
  };

  const result = operators[operator](operand_1, operand_2);

  if (result) return options.fn(this);
  else return options.inverse(this);
});
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(busboyBodyParser());
app.use(cookieParser());
// app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

app.use("/carts", cartRouter);
app.use("/profile", profileRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/payments", paymentRouter);
app.use("/vouchers", voucherRouter);
app.use("/category", categoryRouter);
app.use("/products", productRouter);
app.use("/dashboard", dbRouter);
app.use("/", homeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
