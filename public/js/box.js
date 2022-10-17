let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.getElementById('modal');
let btnUrl = document.getElementById('btnUrl');
let form = document.getElementById('form');

//const Pusher = require('pusher');
//const dotenv = require('dotenv');
//import Echo from 'laravel-echo';
//dotenv.config();
// import { io } from "socket.io-client";
// const socket = io("ws://localhost:3000");

// abrir
openModal.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    btnUrl.style.visibility = 'visible';
})

// cerrar
closeModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    btnUrl.style.visibility = 'hidden';
})

// modal.addEventListener('click', () => {
//     modal.style.visibility = 'hidden';
// })
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click')
    let data = new FormData(form);
    let message = {
        message: data.get('inputText')
    }

    socket.emit("message", message);

    // receive a message from the server
    socket.on("message", (data) => {
        console.log(data);
    });


    //import window.Pusher from 'pusher-js';

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

})




