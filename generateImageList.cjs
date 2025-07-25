const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "public/images"); // or wherever your images live
const outputFile = path.join(__dirname, "public", "imageList.json");

const files = fs
  .readdirSync(imageDir)
  .filter((file) => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file));

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log(`Wrote ${files.length} filenames to ${outputFile}`);
