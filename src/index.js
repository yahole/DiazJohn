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
    // Offset by 500px (half of 1000px) to keep the cursor centered
    const x = e.clientX - 500;
    const y = e.clientY - 500;
    
    glow.style.setProperty('--x', `${x}px`);
    glow.style.setProperty('--y', `${y}px`);
});
