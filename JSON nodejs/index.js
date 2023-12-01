// const bioData = {
//     name : "sahil",
//     age : 21,
//     task : "complete this and next video"
// }

// const objToJson = JSON.stringify(bioData)
// const jsonToObj = JSON.parse(objToJson)

// console.log(jsonToObj)




// 1 create a Object
// 2 convert it to JSON
// 3 add it into other File
// 4 read File
// 5 again conver it back to Object
// 6 show it on console

const fs = require('fs')
const bioData = {
    name : "sahil",
    age : 21,
    task : "complete this and next video"
}

const step1 = JSON.stringify(bioData);
// fs.writeFile("newjson.json", step1, (err)=>{
//     console.log('JSON file is created ')
// })

fs.readFile("newjson.json", "utf8", (err, data)=>{
    console.log(data)
    const step5 = JSON.parse(step1);
    console.log(step5)
})