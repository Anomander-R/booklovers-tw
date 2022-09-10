const btn = document.getElementById("menu-btn");
const menu = document.getElementById('menu');

btn.addEventListener("click", navToggle2);

function navToggle2() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
