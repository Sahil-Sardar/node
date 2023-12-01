// const http = require('http')

// const server = http.createServer((req, res)=>{
//     res.end('helloooo its meeeee')
// })

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening to the server on port 8000")
// })


const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if (req.url == "/") {
        res.end('helloooo its meeeee')
    }
    else if (req.url == "/about") {
        res.end('its a about page')
    }
    else if (req.url == "/contact") {
        res.end('contact me on balleballeshabashab@gmail.lulu')
    }
    else if (req.url == "/blog") {
        res.end('my first blog god bye')
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end('<h1>404 - page does not exist boi boi</h1>')
    }
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the server on port 8000")
})

