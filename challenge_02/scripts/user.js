export function getUserLoggedIn() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    const nav = document.querySelector('.navbar_menu');
    const { name, lastname } = user;
    nav.children[1].innerHTML = `Bienvenido, ${name} ${lastname}`;
    nav.children[1].setAttribute('href', '#');

    const logout = document.createElement('a');
    logout.innerHTML = 'Cerrar sesión';
    nav.appendChild(logout);

    logout.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.history.pushState('', 'done', '/pages/authentication.html');
      window.history.go();
    });
  }
}