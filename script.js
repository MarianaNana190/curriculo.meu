const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('a[href="#contato"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#contato')?.classList.add('contact-highlight');
    window.setTimeout(() => document.querySelector('#contato')?.classList.remove('contact-highlight'), 900);
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('is-selected');
    }
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.timeline-item, .skill-card, .project-card').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
