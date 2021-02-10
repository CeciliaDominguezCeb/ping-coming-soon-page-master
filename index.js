const email = document.querySelector('.email');
const submit = document.querySelector('.submit');

//listeners

initApp();

function listener() {
    document.addEventListener('DOMContentLoaded', initApp);
}

function initApp(){
    submit.disabled = true;
    submit.style.cursor = "not-allowed"
}