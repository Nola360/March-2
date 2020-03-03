const plusSign = document.querySelectorAll('.accordion-item-header');

plusSign.forEach(header => {
  header.addEventListener('click', event => {
    header.classList.toggle('active');
  })


})