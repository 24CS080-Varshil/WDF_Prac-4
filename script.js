const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let page = 0;
const cardsPerView = 3;

function updateSlide() {
  const cardWidth = cards[0].offsetWidth + 20; // include margin
  const offset = page * cardsPerView * cardWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  if (page > 0) {
    page--;
    updateSlide();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPage = Math.ceil(cards.length / cardsPerView) - 1;
  if (page < maxPage) {
    page++;
    updateSlide();
  }
});


updateSlide();


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const answer = faq.querySelector('.answer');
  const toggle = faq.querySelector('.toggle');

  question.addEventListener('click', () => {
    const isActive = faq.classList.contains('active');
    if (isActive) {
      faq.classList.remove('active');
    } else {
      faq.classList.add('active');
    }
  });
});




const popup = document.getElementById('popup');
const openBtn = document.getElementById('openPopup');
const closeBtn = document.querySelector('.close');

// Open popup
openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

