function animfnc() {
  document.getElementById("bg-anim").className = "water-move";
  document.getElementById("jug-anim").className = "water-move2";
 }
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

function pagebottels(){
document.getElementById('main').style.display="none";
document.getElementById('cart-section').style.display="none";
document.getElementById('user-section').style.display="none";

document.getElementById('bottels-section').style.display="grid";
}

function pagerefill(){
document.getElementById('main').style.display="grid";
document.getElementById('bottels-section').style.display="none";
document.getElementById('cart-section').style.display="none";
document.getElementById('user-section').style.display="none";
}

function pagecart(){
  document.getElementById('main').style.display="none";
  document.getElementById('user-section').style.display="none";
  document.getElementById('bottels-section').style.display="none";
  document.getElementById('cart-section').style.display="grid";
}

function pageuser(){
  document.getElementById('main').style.display="none";
  document.getElementById('cart-section').style.display="none";
  document.getElementById('bottels-section').style.display="none";
  document.getElementById('user-section').style.display="grid";
}