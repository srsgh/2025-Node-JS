// index.js becomes the container representing file
const { msg1 } = require("./inside1.js");
const { msg2 } = require("./inside2.js");

module.exports = { msg1, msg2 };
