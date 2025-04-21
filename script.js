// Create bats
function createFlyingBats() {
  for(let i = 0; i < 5; i++) {
    const bat = document.createElement('div');
    bat.className = 'bat-animation';
    bat.style.top = Math.random() * 100 + 'vh';
    bat.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(bat);
  }
}

// Parallax effect
function parallaxEffect(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
createFlyingBats();
window.addEventListener('mousemove', parallaxEffect);

// Add scroll animation
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
entry.target.classList.add('fade-in');
}
});
}, {threshold: 0.1});

  document.querySelectorAll('.about, .member-card').forEach(el => {
    observer.observe(el);
  });
});
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
