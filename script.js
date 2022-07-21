const name = document.querySelector('#name');
const lastname = document.querySelector('#lastname');
const birthDate = document.querySelector('#birthdate');
const email = document.querySelector('#email');
const experience = document.querySelector('#experience');
const resultContainer = document.querySelector('.result');
const calculation = document.querySelector('.calculation');

calculation.addEventListener('click', information)

function information() { 
    resultContainer.innerHTML = `Hola ${name.value}. Hemos creado satisfactoriamente tu cuenta con los siguientes datos: <br><br>Nombres: ${name.value}<br>Lastname: ${lastname.value}<br>email: ${email.value}<br>Fecha de nacimiento: ${birthDate.value}<br>Años de experiencia: ${experience.value}`;
}