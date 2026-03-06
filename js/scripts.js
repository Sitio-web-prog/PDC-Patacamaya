const elementos = document.querySelectorAll('.fade-in');

const mostrar = () => {
elementos.forEach(el => {
const top = el.getBoundingClientRect().top;
const visible = window.innerHeight - 100;

if(top < visible){
el.classList.add('visible');
}
});
};

window.addEventListener('scroll', mostrar);
mostrar();

const secciones = document.querySelectorAll("section, div[id]");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let actual = "";

secciones.forEach(sec=>{
const top = window.scrollY;
const offset = sec.offsetTop - 120;
const height = sec.offsetHeight;

if(top >= offset && top < offset + height){
actual = sec.getAttribute("id");
}
});

links.forEach(link=>{
link.classList.remove("active");

if(link.getAttribute("href") == "#"+actual){
link.classList.add("active");
}
});

});
window.onscroll = function(){

let scroll = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (scroll / height) * 100;

document.getElementById("scroll-bar").style.width = scrolled + "%";

};