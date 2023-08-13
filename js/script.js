
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('nav').classList.toggle('open');
  document.querySelector('.comment__wrapper-second').classList.toggle('opacity');
})
