// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque

let formulario = document.querySelector(".formulario")


document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('curtir');

    button.addEventListener('click', () => {
        button.classList.add('clicked');
    });
});

