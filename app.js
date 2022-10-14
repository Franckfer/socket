const http = require('http');
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
let message
app.post('/body', (req, res) => {
  console.log("soy el body",req.body)
   message = req.body.message
  
    messageEmit(message)
     
      res.send(true)
})
function messageEmit(mes) {
  io.on("connection", (socket) => {
    console.log('socket is ready for connection');
    // send a message to the client
    socket.emit("message",mes);
        console.log("aca estoy");
    // receive a message from the client
    socket.on("message", (data) => {
      // 
      console.log(data);
    });
  });
}


app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});