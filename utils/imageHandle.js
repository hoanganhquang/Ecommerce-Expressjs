const multer = require("multer");

const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
});

exports.uploadPhoto = upload.single("photo");

exports.resizePhoto = (req, res, next) => {
  if (!req.file) return next();

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("png")
    .jpeg({ quality: 90 })
    .toFile(`/uploads/img/${req.file.filename}`);

  next();
};
