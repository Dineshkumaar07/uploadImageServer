const multer = require("multer");

var storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Upload a image"));
    }
    cb(undefined, true);
  },
});

// var upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, callback) {
//     // console.log(file.mimetype);
//     if (
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg" ||
//       file.mimetype == "image/png"
//     ) {
//       callback(null, true);
//     } else {
//       // console.log("Only JPEG and JPG & PNG file supported!");
//       callback(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
// });

// module.exports = upload;
