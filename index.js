//! index.js

const zlib=require("node:zlib")
const fs = require("node:fs");

const gzip=zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark:2
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream)

//creates a zip folder of type gzip
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
//readableStream->gzip->writestream
