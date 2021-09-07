export const MOVIES = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    url: 'https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg',
    description: 'Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos.',
  },
  {
    id: 2,
    title: 'The Godfather',
    url: 'https://pics.filmaffinity.com/the_godfather-488102675-large.jpg',
    description: 'América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de "Il consigliere" Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    url: 'https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg',
    description: 'Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.',
  },
  {
    id: 4,
    title: '12 Angry Men',
    url: 'https://pics.filmaffinity.com/12_angry_men-122099105-large.jpg',
    description: 'Los doce miembros de un jurado deben juzgar a un adolescente acusado de haber matado a su padre. Todos menos uno están convencidos de la culpabilidad del acusado. El que disiente intenta con sus razonamientos introducir en el debate una duda razonable que haga recapacitar a sus compañeros para que cambien el sentido de su voto.',
  },
  {
    id: 5,
    title: 'Malignant',
    url: 'https://pics.filmaffinity.com/malignant-638350135-large.jpg',
    description: 'Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras.',
  }
];

export function getMovies() {
  const fragment = document.createDocumentFragment();
  MOVIES.forEach(movie => {
    const { id, title, url } = movie;
    const element = document.createElement('div');
    element.classList.add('movies_item');
    element.id = `movie_${id}`;
    element.innerHTML = `
      <img src="${url}" alt="${title}" />
      <div class="movie_content">
        <h2>${title}</h2>
      </div>
    `;
    fragment.appendChild(element);

    element.addEventListener('click', () => {
      window.history.pushState({}, 'done', `../pages/movies.html?id=${id}`);
      window.history.go();
    });
  });
  return fragment;
}