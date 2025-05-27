function clickMenu() {
  console.log('clicked');
  let navContainer = document.querySelector('.navigation_nav_mobile_container');
  navContainer.classList.toggle('bg-menu-mobile');

  let nav = document.querySelector('.navigation_nav_mobile');
  nav.classList.toggle('hide');

  let menuIcon = document.querySelector('.icon-menu');
  let currentName = menuIcon.getAttribute('name');
  const newName =
    currentName === 'menu-outline' ? 'close-outline' : 'menu-outline';
  menuIcon.setAttribute('name', newName);
}
