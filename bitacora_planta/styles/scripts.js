let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}

/* //Modal/* 
let agregar = document.querySelector("#agregarRegistro");
let modal = document.querySelector(".modal");
let animacion = document.querySelector("#animacion");

agregar.onclick = function(){
    modal.classList.toggle("active");
    animacion.classList.toggle("active");
} */ 