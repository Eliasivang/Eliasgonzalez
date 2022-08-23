
ScrollReveal().reveal('.logo', {
    delay: 200 
});
ScrollReveal().reveal('.nav__links', {
    delay: 200 
});
ScrollReveal().reveal('.contact', {
    delay: 200 
});
ScrollReveal().reveal('.h2-container', {
    delay: 800
});
ScrollReveal().reveal('.h3-container', {
    delay: 1300 
});
ScrollReveal().reveal('.programmer-img', {
    delay: 200 
});

ScrollReveal().reveal('.flex-container', {
    delay:900,
    origin: 'bottom',
    duration: 1000,
    distance: '100px'
});
ScrollReveal().reveal('.myskills-container', {
    delay:900,
    origin: 'bottom',
    duration: 1000,
    distance: '100px'
});

ScrollReveal().reveal('.gallery-box', {
    delay:900,
    origin: 'bottom',
    duration: 1000,
    distance: '100px'
});
ScrollReveal().reveal(".form-container", {
    origin: 'left',
    delay: 400,
    duration: 1000,
    distance: '100px'
});
/*
let animado = document.querySelectorAll(".flex-container");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for( var i=0; i<animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-600<scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener("scroll", mostrarScroll);

let animadoDos = document.querySelectorAll(".myskills-container");

function mostrarScrollDos(){
    let scrollTopDos = document.documentElement.scrollTop;
    for( var i=0; i<animadoDos.length; i++) {
        let alturaAnimadoDos = animadoDos[i].offsetTop;
        if(alturaAnimadoDos-700<scrollTopDos) {
            animadoDos[i].style.opacity = 1;
        }
    }
}


window.addEventListener("scroll", mostrarScrollDos);

*/

window.addEventListener("scroll",function(){
    let header=document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})

function validarEmail(){
    let tuEmail= document.getElementById("email").value;
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = expReg.test(tuEmail);
    if (valido==false){
      document.getElementById("error-email").style.opacity=1; 
    }
    else if(valido==true){
      document.getElementById("error-email").style.opacity=0;
        }
}

const formulario = addEventListener('submit', (e)=>{
e.preventDefault();
console.log('buscando..')
});

document.addEventListener("DOMContentLoaded", ()=>{
    ("estas a punto de entrar a la pagina.!!!")
})

