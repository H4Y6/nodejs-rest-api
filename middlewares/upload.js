const fs = require("fs/promises");
const multer = require("multer");
const path = require("path");
const { basedir } = global;

const avatarsDir = path.join(basedir, "avatars");

const storage = multer.diskStorage({
  tmpDir: path.join(basedir, "tmp"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
