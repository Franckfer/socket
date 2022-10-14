let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.getElementById('modal');
let btnUrl = document.getElementById('btnUrl');
let form = document.getElementById('form');

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
    console.log(data.get('inputText'));
    //let url = document.getElementById('url').value;
    //console.log(url);
    //let iframe = document.getElementById('iframe');
    //iframe.src = url;
})
