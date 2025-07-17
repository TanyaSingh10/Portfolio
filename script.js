// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Fake contact form handler
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for your message!");
  e.target.reset();
});


// // Resume Modal
// const openModal = document.getElementById('open-modal');
// const closeModal = document.getElementById('close-modal');
// const resumeModal = document.getElementById('resume-modal');

// openModal.addEventListener('click', () => {
//   resumeModal.style.display = 'block';
// });

// closeModal.addEventListener('click', () => {
//   resumeModal.style.display = 'none';
// });

// window.addEventListener('click', e => {
//   if (e.target === resumeModal) {
//     resumeModal.style.display = 'none';
//   }
// });
