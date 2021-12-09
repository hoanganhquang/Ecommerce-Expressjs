const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
});

exports.uploadPhoto = upload.single("photo");

exports.resizePhoto = (req, res, next) => {
  console.log(req.file);
  if (!req.file) return next();

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/img/${req.file.originalname}`);

  next();
};
