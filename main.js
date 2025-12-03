const startButton = document.querySelector('.start_button');
const startPage = document.querySelector('.start');
const classroom = document.querySelector('.classroom');
const classroomtTitle = document.querySelectorAll('.classroom_title');
const loader = document.querySelector('.loader');
const navBar = document.querySelector('.navbar_container');
const navBarItems = document.querySelectorAll('.navbar_item');
const classroomSections = document.querySelectorAll('.classroom_section');

function start() {
  loader.style.display = 'flex';
  setTimeout(() => {
    loader.style.display = 'none';
    startPage.style.display = 'none';
    classroom.style.display = 'block';
  }, 9000);
}

classroomtTitle.forEach((item, indx) => (
  item.style.marginLeft = `${140 * indx}px`
));
startButton.addEventListener('click', start);

navBar.addEventListener('click', function(event) {
  let target = event.target;
  if (target.classList.contains('active') || target.classList.contains('navbar_container')) return;
  navBarItems.forEach((item) => (
    item.classList.remove('active')
  ));
  target.classList.add('active');
  classroomSections.forEach((item) => (
    item.style.display='none'
  ));
  classroomSections[target.dataset.indexNumber].style.display='flex';
  console.log(target.dataset.indexNumber);
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