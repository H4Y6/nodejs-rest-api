const Jimp = require("jimp");

const manipulateImg = async (tmpPath) => {
  const avatar = await Jimp.read(tmpPath);
  avatar.resize(250, 250); // resize
  avatar.quality(77);
  avatar.write(tmpPath);
};

module.exports = manipulateImg;
