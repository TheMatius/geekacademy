import { getUserLoggedIn } from './user.js';
import { getMovies } from './movies.js';

getUserLoggedIn();

const movies = document.querySelector('.movies');
movies.appendChild(getMovies());

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const slides = document.querySelectorAll('.slide');
let moving = false;

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

function getCurrentSlideIndex() {
  const currentSlide = document.querySelector('.slide.active');
  return [...slides].indexOf(currentSlide);
}

function moveSlides(currentSlide, nextSlide, direction) {
  if (moving) return;
  moving = true;
  const currentDirection = direction === 'R' ? 100 : -100;
  const nextDirection = direction === 'R' ? -100 : 100;

  nextSlide.style.transform = `translateX(${currentDirection}%)`;
  setTimeout(() => {
    currentSlide.classList.add('moved');
    nextSlide.classList.add('moved');
    currentSlide.style.transform = `translateX(${nextDirection}%)`;
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    nextSlide.addEventListener('transitionend', () => {
      currentSlide.classList.remove('moved');
      nextSlide.classList.remove('moved');
      moving = false;
    });
  }, 0);
}

function nextSlide() {
  const currentIndex = getCurrentSlideIndex();
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlides(slides[currentIndex], slides[nextIndex], 'R');
}
 
function prevSlide() {
  const currentIndex = getCurrentSlideIndex();
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlides(slides[currentIndex], slides[prevIndex], 'L');
}