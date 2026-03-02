const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    // getBoundingClientRect().top + scrollY gives the true absolute top
    const sectionTop = current.getBoundingClientRect().top + scrollY - 150; 
    const sectionId = current.getAttribute("id");
    
    // We target the specific nav link for this section
    const navLink = document.querySelector(`.nav a[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("animate-bounce", "text-teal-300");
        navLink.classList.remove("text-slate-500");
      } else {
        navLink.classList.remove("animate-bounce", "text-teal-300");
        navLink.classList.add("text-slate-500");
      }
    }
  });
}

const glow = document.getElementById('mouse-glow');

window.addEventListener('mousemove', (e) => {
    // This updates the CSS variables --x and --y in real-time
    glow.style.setProperty('--x', `${e.clientX}px`);
    glow.style.setProperty('--y', `${y = e.clientY}px`);
});

window.addEventListener('mousedown', () => {
    glow.style.opacity = '0.6';
    glow.style.scale = '1.2';
});

window.addEventListener('mouseup', () => {
    glow.style.opacity = '0.4';
    glow.style.scale = '1';
});
