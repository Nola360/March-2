const plusSign = document.querySelectorAll('.accordion-item-header');

plusSign.forEach(header => {
  header.addEventListener('click', event => {
    // checks if accordion item body is open & closes upon clicking another
    const openBody = document.querySelector('.accordion-item-header.active');
    console.log(openBody);
    if (openBody && openBody !== header) {
      openBody.classList.toggle('active');
      openBody.nextElementSibling.style.maxHeight = 0;
    }

    // adds active class to accordion item header to open
    header.classList.toggle('active');
    const accordionBody = header.nextElementSibling;
    if (header.classList.contains('active')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = 0;
    }
  })
})

// scrollHeight property return the entire height of an element in px including the height that is not visible due to overflow