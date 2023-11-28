const fs = require('fs')

// fs.writeFileSync("bio.txt", "mahi ya ve")
// fs.appendFileSync("bio.txt", "mahi ya ve")

// const read = fs.readFileSync("bio.txt", "utf8")
// console.log(read)

// fs.renameSync('bio.txt', 'myBio.txt')

fs.unlinkSync('myBio.txt')