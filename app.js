const http = require('http');
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
//const Pusher = require('pusher');
const dotenv = require('dotenv');
const Echo = require('laravel-echo');


dotenv.config();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// axios.post('http://localhost:8080', {
  //     message: 'Hello World'
  //   })  
  //   .then((response) => {
    //     console.log(response);
    //   }, (error) => {
      //     console.log(error);
      //   });
      
      
      // var pusher = new Pusher({
        //   appId: process.env.PUSHER_APP_ID,
        //   key: process.env.PUSHER_APP_KEY,
        //   secret: process.env.PUSHER_APP_SECRET,
        //   cluster: process.env.PUSHER_APP_CLUSTER,
        // });
        
        //pusher.trigger("web-channel", "my-event", { message: "hello world" });
        window.Pusher = require('pusher-js');
        
        window.Echo = new Echo({
          broadcaster: 'pusher',
          key: process.env.PUSHER_APP_KEY,
          cluster: process.env.PUSHER_APP_CLUSTER,
    //forceTLS: true
  
});

window.Echo.channel('web-channel')
    .listen('my-event', (e) => {
        console.log(e);
    });



// let pusher = new Pusher(process.env.PUSHER_APP_KEY, {
//   cluster: process.env.PUSHER_APP_CLUSTER,
// });


//console.log(pusher.get({ path: '/channels' }));
//console.log(pusher.);

//var channel = pusher.subscribe("web-channel");

// pusher.bind('web-channel', function(data) {
//   // this is called when the event notification is received...
//   console.log(data);
// });

let message
app.post('/body', (req, res) => {
  console.log("soy el body",req.body)
   message ={
     message:req.body.message
  } 
      messageBody(message)

})

  io.on("connection", (socket) => {
    console.log('socket is ready for connection');
    // send a message to the client
    
    socket.on("message", (data) => {
      console.log(data);
      socket.emit("message",data);
          console.log("aca estoy");
    });
    // receive a message from the client
  });
  

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});



// exports.modules=app