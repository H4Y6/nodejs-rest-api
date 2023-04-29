const Jimp = require("jimp");

async function manipulateImg(tmpPath) {
  try {
    const avatar = await Jimp.read(tmpPath);
    avatar.resize(250, 250); // resize
    avatar.quality(77);
    avatar.write(tmpPath);
  } catch (error) {
    console.log(error);
  }
}

module.exports = manipulateImg;
