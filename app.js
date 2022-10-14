const http = require('http');
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const server = http.createServer(app);
const IO = new Server(server);

app.use(express.static(__dirname + '/public'));

IO.on('connection', (socket) => {
    console.log('a user connected');
});


app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});