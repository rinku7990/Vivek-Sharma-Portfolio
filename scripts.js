// Smooth Scrolling for Navbar Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Adjust for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Form Submission Handling
  // You can integrate with Formspree or another service for form submissions
  