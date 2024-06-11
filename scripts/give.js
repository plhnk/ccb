// onpage nav

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.give-content > section');
    console.log(sections, 'sections');
    console.log('script loaded');
  const navLinks = document.querySelectorAll('.onpage-nav a');
    console.log(navLinks, 'nav links');
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    let currentSection = '';

    sections.forEach((section) => {
        console.log(section.getAttribute('id'), section.offsetTop);

      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        // Adjust the offset as needed
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});

// accordion section

function toggleFAQ(element) {
    const answerDiv = element.parentElement.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');
    
    if (answerDiv.style.display === "block") {
        answerDiv.style.display = "none";
        icon.textContent = "+";
    } else {
        answerDiv.style.display = "block";
        icon.textContent = "–";
    }
}
