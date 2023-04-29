const fs = require("fs/promises");
const path = require("path");

const { basedir } = global;
const { User } = require(`${basedir}/models/users`);
const { manipulateImg } = require(`${basedir}/middlewares`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tmpPath, originalname } = req.file;
    await manipulateImg(tmpPath);
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tmpPath, uploadPath);
    const avatarURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

// Jimp.read("lenna.png", (err, lenna) => {
//   if (err) throw err;
//   lenna
//     .resize(256, 256) // resize
//     .quality(60) // set JPEG quality
//     .greyscale() // set greyscale
//     .write("lena-small-bw.jpg"); // save
// });

module.exports = setAvatar;
