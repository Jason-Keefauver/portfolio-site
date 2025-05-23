const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

const moonIconClass = 'fa-regular fa-moon';
const sunIconClass = 'fa-solid fa-sun';


if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  icon.className = sunIconClass;
} else {
  icon.className = moonIconClass;
}


themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    icon.className = sunIconClass;
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.className = moonIconClass;
    localStorage.setItem('darkMode', 'disabled');
  }
});