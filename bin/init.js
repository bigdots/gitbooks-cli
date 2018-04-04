const path = require("path");
const fs = require("fs");

export default function(dir, cmd) {
    console.log("init " + dir);
    fs.mkdirSync(path.resolve(__dirname, dir));
}
