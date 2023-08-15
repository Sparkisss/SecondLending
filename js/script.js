
const menu = document.querySelectorAll('.burger');
const items = document.querySelectorAll('.middle__top-element');
const example = document.querySelectorAll('.middle__info');

menu.forEach((men, index) => {
  men.addEventListener('click', function() {
    menu[index].classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
  document.querySelector('.comment__wrapper-second').classList.toggle('opacity');
  });
});

items.forEach((item, index) => {
  item.addEventListener('click', function () {
    example[index].classList.toggle('open');
  });
});
