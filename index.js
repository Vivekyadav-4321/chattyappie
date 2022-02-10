const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const {Server, Socket} = require("socket.io")
const io = new Server(server)


app.get("/",(req,res)=>{
res.sendFile(`${__dirname}/index.html`,()=>{})
})

io.on("connection",(socket)=>{  
    socket.setMaxListeners(8);
    socket.on("clickedbutton",(r)=>{
        socket.broadcast.emit("hehe",r)
   

}) 
    })


server.listen(5000,"127.0.0.1",()=>{})