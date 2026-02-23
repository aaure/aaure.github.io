const yeah = new Audio('src/sounds/sound_yeah.mp3');
yeah.volume = 0.1;
document.querySelectorAll('.tildes, .title').forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', () => {
    yeah.currentTime = 0;
    yeah.play();
  });
});
