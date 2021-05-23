const express = require("express");
const router = express.Router();
const upload = require("../helper/file.js");
// const upload = require("../helper/file.js");
// const multer = require("multer");
// const upload = multer({
//   dest: "./uploads",
//   storage:{
//     file
//   }
// });
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/upload/file", upload.single("file"), (req, res) => {
  console.log(req);
  res.json({ file: req.file });
});
module.exports = router;
