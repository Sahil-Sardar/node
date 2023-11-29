const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('helloooo its meeeee')
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the server on port 8000")
})


