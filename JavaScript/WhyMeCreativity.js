const photoGallery = document.querySelector('.photo_gallery');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');
const carousel_indicators = document.querySelectorAll('.carousel');
let currentIndex = 0;
let photos = photoGallery.querySelectorAll('img');


function displayPhoto() {
    // Ukryj wszystkie zdjęcia w galerii
    photos.forEach(photo => {
        photo.style.display = 'none';
    });

    // Wyświetl aktualne zdjęcie
    if (currentIndex >= 0 && currentIndex < photos.length) {
        const currentPhoto = photos[currentIndex];

        // Ustaw wysokość przycisku na wysokość aktualnego zdjęcia po załadowaniu obrazka
        currentPhoto.onload = function() {
            prevButton.style.height = currentPhoto.height + 'px';
            nextButton.style.height = currentPhoto.height + 'px';
        };

        currentPhoto.style.display = 'block';
    }
    

}

displayPhoto();

nextButton.addEventListener('click', () => {

    
    // Ukryj aktualne zdjęcie
    if (currentIndex >= 0 && currentIndex < photos.length) {
        photos[currentIndex].style.display = 'none';
        
    }
    currentIndex++;
    if (currentIndex >= photos.length) {
        currentIndex = 0; // Wróć do pierwszego zdjęcia, jeśli przekroczono zakres
    }

    updateActiveDot();
    displayPhoto();
    

});
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=photos.length - 1;
    } 
    updateActiveDot();
    displayPhoto();
  });



  carousel_indicators.forEach((carousel, index) => {
    carousel.addEventListener('click', () => {
        currentIndex = index; // Aktualny indeks na podstawie klikniętego kółka
        // Usuń klasę "active" z carousel, która była wcześniej aktywna
        carousel_indicators.forEach(carousel => {
            carousel.classList.remove('active');
        });

        // Dodaj klasę "active" do klikniętego kółka
        carousel.classList.add('active');

        displayPhoto();
    });
});

function updateActiveDot() {
    // Usuń klasę "active" ze wszystkich carousel
    carousel_indicators.forEach(carousel => {
        carousel.classList.remove('active');
    });

    // Dodaj klasę "active" do aktualnego carousel
    carousel_indicators[currentIndex].classList.add('active');
}


