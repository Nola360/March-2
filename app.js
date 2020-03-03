const plusSign = document.querySelectorAll('.accordion-item-header');

plusSign.forEach(header => {
  header.addEventListener('click', event => {
    header.classList.toggle('active');
    const accordionBody = header.nextElementSibling;
    if (header.classList.contains('active')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = 0;
    }
  })
})

// ScrollHeight property return the entire height of an element in px including the height that is not visible due to overflow