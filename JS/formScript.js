'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();

        let error = formValidate(form);

        const formData =  new FormData(form);
        const sendingMess = document.getElementById('send-mess');

        if(error === 0){
            form.classList.add('_sending');
            let response = await fetch(
              "https://script.google.com/macros/s/AKfycbyfXa4G1lYUK73ATRAIDJhfkcErqqKz0uJNpuqybOA9xsviwE_9fd_jPxEL9chH16CMPg/exec",
              {
                method: "POST",
                body: formData,
              }
            );
            if(response.ok){
                form.classList.remove("_sending");
                form.reset();
                sendingMess.innerHTML = 'Successfully sent!';
                sendingMess.classList.add('successSend')
            }else {
                sendingMess.innerHTML = 'Something went wrong! Please, try later.'
            }
        }else {
            sendingMess.innerHTML = 'Please, enter valid data!';
            sendingMess.classList.remove('hidden');
        }
    }

    function formValidate(form) {
        let error = 0;
        const inputs = form.querySelectorAll('.inp');

        console.log(inputs);

        for(let input of inputs) {
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if(!emailTest(input)){
                    formAddError(input)
                    error++;
                }
            } else {
                if(input.value === '') {
                    formAddError(input);
                    error++; 
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
    }
});

