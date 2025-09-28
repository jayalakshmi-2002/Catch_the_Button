
const button = document.getElementById('catchMe');

// When mouse comes near button, move it
button.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});

// If someone clicks the button, show "You Win!"
button.addEventListener('click', () => {
  alert("🎉 You Win! You caught the button! 🏆");
});

