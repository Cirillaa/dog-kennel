'use strict'

let butt1 = document.querySelector('#textButton');
let butt2 = document.querySelector('#textButton2');
let chelsea = document.querySelector('.chelsea-more');
let ciri = document.querySelector('.ciri-more');
let closeButt1 = document.querySelector('#closeButton')
let closeButt2 = document.querySelector('#closeButton2')


butt1.addEventListener('click', function() {
    chelsea.classList.remove('hidden')
})
butt2.addEventListener('click', function() {
    ciri.classList.remove('hidden')
});
closeButt1.addEventListener('click', function (){
    chelsea.classList.add('hidden');
})
closeButt2.addEventListener('click', function () {
    ciri.classList.add('hidden');
})
