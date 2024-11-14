document.getElementById('menu-toggle').addEventListener('click', function() {
  const verticalMenu = document.querySelector('.vertical-menu');
  verticalMenu.style.display = (verticalMenu.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  const target = event.target;
  const verticalMenu = document.querySelector('.vertical-menu');
  const menuToggle = document.getElementById('menu-toggle');
  if (verticalMenu.style.display === 'block' && target !== verticalMenu && target !== menuToggle) {
      verticalMenu.style.display = 'none';
  }
});

// Konsolensimulation im Hacker-Stil
const consoleInput = document.createElement('input');
consoleInput.id = 'console-input';
consoleInput.placeholder = 'Enter command...';
document.body.appendChild(consoleInput);

consoleInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      const command = consoleInput.value.trim().toLowerCase();
      handleCommand(command);
      consoleInput.value = '';
  }
});

function handleCommand(command) {
  const eastereggSection = document.querySelector('.easteregg');

  switch (command) {
      case 'help':
          alert('Available commands: help, easteregg, about');
          break;
      case 'easteregg':
          alert('Congratulations! You found the Easteregg!');
          eastereggSection.style.display = 'block';
          break;
      case 'about':
          alert('Christian Lukowski - aspiring software developer with a passion for IT security and hacking.');
          break;
      default:
          alert('Unknown command. Type "help" for a list of commands.');
  }
}


// Glitch-Effekt bei Mouseover
const glitchElements = document.querySelectorAll('.hero, .cta-button, header');

glitchElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
      element.classList.add('glitch');
  });

  element.addEventListener('mouseleave', () => {
      element.classList.remove('glitch');
  });
});
