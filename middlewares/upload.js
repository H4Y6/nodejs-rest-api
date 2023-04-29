const multer = require("multer");
const path = require("path");
const { basedir } = global;

const tmpsDir = path.join(basedir, "tmp");

const storage = multer.diskStorage({
  tmpDir: tmpsDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
