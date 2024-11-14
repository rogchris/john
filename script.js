document.getElementById('menu-toggle').addEventListener('click', function() {
  const verticalMenu = document.querySelector('.vertical-menu');
  if (verticalMenu.style.display === 'block') {
      verticalMenu.style.display = 'none';
  } else {
      verticalMenu.style.display = 'block';
  }
});