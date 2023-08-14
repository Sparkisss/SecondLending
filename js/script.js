
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('nav').classList.toggle('open');
  document.querySelector('.comment__wrapper-second').classList.toggle('opacity');
})



const items = document.querySelectorAll('.middle__top-element');
const example = document.querySelectorAll('.middle__info');

items.forEach((item, index) => {
  item.addEventListener('click', function () {
    
  });
});
