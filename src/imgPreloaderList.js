import path from 'path';
const cache = {};
const files = require.context("./assets/b-modal-img", true, /\.png/);
files.keys().forEach((key) => {
  const name = path.basename(key, ".png");
  console.log(files(key), name);
  cache[name] = files(key);
});
console.log(cache);
let stealImgArr = [];

Object.keys(cache).forEach((key) => {
  if (!cache[key].includes("data:image/")) {
    stealImgArr.push(cache[key]);
  }
});
export default stealImgArr;