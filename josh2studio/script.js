// =====================
// 1. MOBILE MENU TOGGLE
// =====================
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('nav-links').classList.remove('open');
  });
});


// =====================
// 2. CONTACT FORM
// =====================
function submitForm() {
  const name     = document.getElementById('name').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const service  = document.getElementById('service').value;
  const message  = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !phone || !service || !message) {
    feedback.textContent = '⚠️ Please fill in all fields before sending.';
    feedback.className = 'feedback error';
    return;
  }

  feedback.textContent = '✅ Thank you, ' + name + '! Your message has been received. We will get back to you soon.';
  feedback.className = 'feedback success';

  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('service').value = '';
  document.getElementById('message').value = '';
}


// =====================
// 3. PORTFOLIO LIGHTBOX
// =====================
function openLightbox(images, title) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImages = document.getElementById('lightbox-images');
  const lightboxTitle = document.getElementById('lightbox-title');

  lightboxTitle.textContent = title;
  lightboxImages.innerHTML = '';

  images.forEach(function(src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = title;
    lightboxImages.appendChild(img);
  });

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});


// =====================
// 4. NOT UPDATED MESSAGE
// =====================
function showNotUpdated(item) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImages = document.getElementById('lightbox-images');
  const lightboxTitle = document.getElementById('lightbox-title');
  const label = item.querySelector('.portfolio-label').textContent;

  lightboxTitle.textContent = label;
  lightboxImages.innerHTML = '<div class="not-updated-msg">🚧 Not updated yet.<br>Message us to view portfolio.</div>';

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}


// =====================
// 5. ACTIVE NAV ON SCROLL
// =====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let current = '';

  sections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = 'white';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#f0a500';
    }
  });
});
