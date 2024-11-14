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