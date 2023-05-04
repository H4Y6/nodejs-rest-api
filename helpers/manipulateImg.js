const Jimp = require("jimp");

async function manipulateImg(tmpPath) {
  try {
    const avatar = await Jimp.read(tmpPath);
    avatar
      .resize(250, 250) // resize
      .quality(77)
      .greyscale()
      .write(tmpPath);
  } catch (error) {
    console.log(error);
  }
}

module.exports = manipulateImg;
