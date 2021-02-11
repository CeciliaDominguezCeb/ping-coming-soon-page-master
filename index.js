const email = document.querySelector('.email');
const submit = document.querySelector('.submit');
const message = document.querySelector('.error-message');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//listeners


listener();

function listener() {
    document.addEventListener('DOMContentLoaded', initApp);

    email.addEventListener('blur', emailValidation);
}



function initApp(){
    submit.disabled = true;
    submit.style.cursor = "not-allowed";
    
}

function emailValidation(e){
    if(e.target.value.length > 0){
        e.target.classList.remove('invalid');

    }


    if(e.target.type === 'email'){
        if(re.test(e.target.value)){
            submit.disabled = false
            submit.style.cursor = "pointer";
            message.innerHTML = ``;
        }
    else{
        e.target.classList.add('invalid');
        message.innerHTML = `Please provide a valid email`;
        }
    }
}
