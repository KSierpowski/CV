const photoGallery = document.querySelector('.photo_gallery');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');

let currentIndex = 0;
let photos = photoGallery.querySelectorAll('img');

function displayPhoto() {
    // Ukryj wszystkie zdjęcia w galerii
    photos.forEach(photo => {
        photo.style.display = 'none';
    });

    // Wyświetl aktualne zdjęcie
    if (currentIndex >= 0 && currentIndex < photos.length) {
        photos[currentIndex].style.display = 'block';
    }
}

displayPhoto();


// Ustaw wysokość przycisku na wysokość aktualnego zdjęcia
if (currentIndex >= 0 && currentIndex < photos.length) {
    prevButton.style.height = photos[currentIndex].height + 'px';
    nextButton.style.height = photos[currentIndex].height + 'px';
}

nextButton.addEventListener('click', () => {

    // Ukryj aktualne zdjęcie
    if (currentIndex >= 0 && currentIndex < photos.length) {
        photos[currentIndex].style.display = 'none';
        
    }
    currentIndex++;
    if (currentIndex >= photos.length) {
        currentIndex = 0; // Wróć do pierwszego zdjęcia, jeśli przekroczono zakres
    }
    
    displayPhoto();
});
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=photos.length - 1;
    } 
    
    displayPhoto(); 
  });
