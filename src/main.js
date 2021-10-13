const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const msg = () => {
    if (pass.value.match(letters) && pass.value.length > minValue && pass.value.match(numbers)
        && pass.value.match(special)) {
        p.style.color = "lime"
        p.innerText = "Masz bardzo dobre hasło"
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.style.color = "gold"
        p.innerText = "Masz dobre hasło"
    } else {
        p.style.color = "tomato"
        p.innerText = "Masz słabe hasło"
    }
}

const checkPassword = () => {
    if (pass.value !== "") {
        msg()
    } else {
        p.innerText = "Nie podałeś hasła"
        p.style.color = ""
    }
}

pass.addEventListener("keyup", checkPassword)
