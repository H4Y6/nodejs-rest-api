const multer = require("multer");
const path = require("path");

const { basedir } = global;

const tmpDir = path.join(basedir, "tmp");

const storage = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
