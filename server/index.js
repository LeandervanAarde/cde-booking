//Not using express
const express = require('express');
const app = express();
const {Server} = require("socket.io");
// built into node, to build the server application
const http = require("http"); 
const cors = require("cors");

//server side starts here 
app.use(cors());
const server = http.createServer(app);
const io = new Server(server,{
    //solving cors
    cors:{
        origin: "*",
        methods:["GET", "POST"],
    },
});

io.on("connection", (socket)=>{
    //everything in here to listen if the user has connected, if not scripts will not run
    //socket specify events 
 
        socket.broadcast.emit("hello", "world");
    
        io.socketsJoin("room1");
  
    socket.on("sndMssg",(data) =>{
            socket.to(data.room).emit("receiveMessage", data);
    });

    socket.on("joinRoom", (data) =>{
        socket.join(data);
        console.log(`User with Id:${socket.id} entered Room ${data}`);
    });

    socket.on("disconnect", () =>[
        console.log("Client disconnected", socket.id)
    ]);
});

server.listen(3001, () =>{
    console.log("Server is now running");
})