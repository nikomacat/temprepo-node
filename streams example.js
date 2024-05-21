//streams writeable, readable, duplex, transform
//chubby bunggy.. chunks mo siya.. .pipe can go write chunks from read chunks
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

//default 64 lb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', {highWaterMark:90000})
// const stream = create ReadStream('../content/big.txt', { encoding: ' utf8'})
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
