// NAVBAR SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// MOBILE MENU
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// TESTIMONIAL SLIDER
const track = document.querySelector('.testimonial-track');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;
const totalSlides = 3;

function goToSlide(n) {
  currentSlide = n;
  if (track) track.style.transform = `translateX(-${n * 100}%)`;
}

if (nextBtn) nextBtn.addEventListener('click', () => goToSlide((currentSlide + 1) % totalSlides));
if (prevBtn) prevBtn.addEventListener('click', () => goToSlide((currentSlide - 1 + totalSlides) % totalSlides));
setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 6000);

// FAQ ACCORDION
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(f => {
      f.classList.remove('active');
      f.querySelector('.faq-a').style.maxHeight = '0';
    });
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// CONTACT FORM → WHATSAPP
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const msg = `*New Website Inquiry*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Business:* ${data.business}%0A*Details:* ${data.message || 'N/A'}`;
    window.open(`https://wa.me/919794169671?text=${msg}`, '_blank');
    form.reset();
  });
}

// STATS COUNTER
const statNums = document.querySelectorAll('.why-stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const startTime = performance.now();
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      };
      requestAnimationFrame(update);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-card, .work-item, .process-step, .faq-item, .trust-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// PARALLAX ON HERO ORBS
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (orb1 && scrolled < window.innerHeight) {
    orb1.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.2}px)`;
  }
  if (orb2 && scrolled < window.innerHeight) {
    orb2.style.transform = `translate(${-scrolled * 0.1}px, ${-scrolled * 0.2}px)`;
  }
});

console.log('⚡ Husain Digital — Premium Website Loaded');
