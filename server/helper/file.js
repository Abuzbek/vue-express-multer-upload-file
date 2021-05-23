const multer = require("multer");
const moment = require("moment");
const slugfiy = require("slugify");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/img");
  },
  filename(req, file, cb) {
    const date = moment().format("DDMMYYYY-HHmmss_SSS");
    cb(null, `${date}_${slugfiy(file.originalname, "_")}`);
  },
});

const allowedTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "audio/mp3",
  "audio/wav",
  "audio/aac",
  "audio/wma",
  "video/gif",
  "video/mp4",
];
const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
});
