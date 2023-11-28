const fs = require('fs')
const os = require('os')

// fs.writeFile('bio.txt', 'this is a asyncronomous function', (err)=>{
//     console.log('file created')
// })

// fs.appendFile('bio.txt', 'this is a appendFile', (err)=>{
//     console.log('append created')
// })

// fs.readFile('bio.txt', 'utf8', (err, data)=>{
//     console.log(data)
// })

// fs.rename('bio.txt', 'myBio.txt', (err)=>{
//     console.log('renamed')
// })

// fs.unlink('myBio.txt', (err)=>{
//     console.log('file deleted')
// })

// fs.rmdir('foldername', (err)=>{
//     console.log('folder is deleted')
// })

console.log(os.arch())
console.log(os.freemem()/1024/1024)
console.log(os.totalmem())
console.log(os)