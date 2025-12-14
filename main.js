const startButton = document.querySelector('.start_button');
const startPage = document.querySelector('.start');
const classroom = document.querySelector('.classroom');
const classroomtTitle = document.querySelectorAll('.classroom_title');
const loader = document.querySelector('.loader');
const navBar = document.querySelector('.navbar_container');
const navBarItems = document.querySelectorAll('.navbar_item');
const menu = document.querySelector('.menu_container');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu_item');
const menuBtn = document.querySelector('.menu_btn');
const menuToggle = document.querySelector('#menu_toggle');
const classroomSections = document.querySelectorAll('.classroom_section');

function start() {
  loader.style.display = 'flex';
  setTimeout(() => {
    loader.style.display = 'none';
    startPage.style.display = 'none';
    classroom.style.display = 'block';
  }, 9000);
}

startButton.addEventListener('click', start);

navBar.addEventListener('click', function (event) {
  let target = event.target;
  if (target.classList.contains('active') || target.classList.contains('navbar_container')) return;
  navBarItems.forEach((item) => (
    item.classList.remove('active')
  ));
  menuItems.forEach((item) => (
    item.classList.remove('active')
  ));
  menuItems[target.dataset.indexNumber].classList.add('active');
  target.classList.add('active');
  classroomSections.forEach((item) => (
    item.style.display = 'none'
  ));
  classroomSections[target.dataset.indexNumber].style.display = 'flex';
});

menu.addEventListener('click', function (event) {
  let target = event.target;
  if (target.classList.contains('active') || target.classList.contains('menu_container')) return;
  menuItems.forEach((item) => (
    item.classList.remove('active')
  ));
  navBarItems.forEach((item) => (
    item.classList.remove('active')
  ));
  navBarItems[target.dataset.indexNumber].classList.add('active');
  target.classList.add('active');
  classroomSections.forEach((item) => (
    item.style.display = 'none'
  ));
  classroomSections[target.dataset.indexNumber].style.display = 'flex';
});

window.addEventListener('click', function (event) {
  let target = event.target;
  if (target === menuBtn || target === menuToggle && menuToggle.checked) {
    menu.style.visibility = 'visible';
    menu.style.right = '0';
  } else if (target === menuBtn || target.classList.contains('menu_container')) {
    menu.style.visibility = 'visible';
    menu.style.right = '0';
  } else {
    menuToggle.checked = false;
    menu.style.visibility = 'hidden';
    menu.style.right = '-100%';
  }
});

const panels = document.querySelectorAll(".classes_panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("classes_active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("classes_active");
  });
};