document.addEventListener("DOMContentLoaded", () => {
  // Handle scroll class toggle
  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Scroll to top on banner click
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll nav buttons
  const navMap = {
    homeBtn: "homeSection",
    aboutBtn: "aboutSection",
    socialsBtn: "socialsSection",
    contactBtn: "contactSection"
  };

  for (const [btnId, sectionId] of Object.entries(navMap)) {
    const btn = document.getElementById(btnId);
    const section = document.getElementById(sectionId);
    if (btn && section) {
      btn.addEventListener("click", () => {
        console.log(`Scrolling to ${sectionId}`);
        section.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
});