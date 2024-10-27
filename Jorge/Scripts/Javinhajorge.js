document.querySelector('.spoiler-toggle').addEventListener('click', function(){
    const spoilerContent = document.querySelector('.spoiler-content');
    if (spoilerContent.style.display === 'none'){
        spoilerContent.style.display = 'block';
        this.textContent = 'Esconder Spoilers';
    } else {
        spoilerContent.style.display='none';
        this.textContent='Mostrar Spoilers';

    }
});

// Slider de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

// Mostrar a primeira imagem por padrão
slides[currentSlide].style.display = 'block';