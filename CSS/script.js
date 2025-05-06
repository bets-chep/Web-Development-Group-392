// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Statistics Counter Animation
  const counters = document.querySelectorAll('.counter-item h3');
  const speed = 200; // Adjust speed for counter animation
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
  
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCount();
  });
  
  // Automated Image Gallery
  const galleryImages = document.querySelectorAll('.work-gallery img');
  let currentGalleryIndex = 0;
  
  function switchGalleryImage() {
    galleryImages.forEach((img, index) => {
      img.style.display = index === currentGalleryIndex ? 'block' : 'none';
    });
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
  }
  
  // Start the gallery loop
  setInterval(switchGalleryImage, 3000);
  
  // Hover Effect for Work Gallery
  galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease-in-out';
    });
  
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Form Validation
  const form = document.getElementById('myForm');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('validationFeedback');
  
    let errors = [];
    if (!name) errors.push('Name is required.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
    if (!password || password.length < 8) errors.push('Password must be at least 8 characters.');
  
    if (errors.length > 0) {
      feedback.textContent = errors.join(' ');
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Form submitted successfully!';
      feedback.style.color = 'green';
    }
  });