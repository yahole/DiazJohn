const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  
  let scrollY = window.pageYOffset;
  
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("animate-bounce");
      } else {
        document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("animate-bounce");
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
