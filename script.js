document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 90}ms`;
});

const hero = document.querySelector('.hero');

const animateCardIn = (item, index) => {
  if (item.classList.contains('is-visible')) return;
  item.classList.add('is-visible');
  item.animate(
    [
      { opacity: 0, transform: 'translateY(16px) scale(0.98)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' }
    ],
    {
      duration: 650,
      delay: index * 70,
      easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      fill: 'forwards'
    }
  );
};

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (hero) {
    hero.style.setProperty('--parallax', `${scrolled * 0.04}px`);
    hero.style.transform = `translateY(${Math.min(scrolled * 0.02, 10)}px)`;
  }

  document.querySelectorAll('.card, .hero-card, .featured-card').forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 120;
    if (visible) animateCardIn(item, index);
  });
});

window.addEventListener('load', () => {
  document.querySelectorAll('.card, .hero-card, .featured-card').forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const visible = rect.top < window.innerHeight + 100;
    if (visible) animateCardIn(item, index);
  });
});
