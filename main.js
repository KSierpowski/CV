const whyMeSection = document.querySelector('.why_me');

// Iterujemy przez tablicę reasons
reasons.forEach(reason => {
    // Tworzymy div, który będzie reprezentować jeden powód
    const reasonDiv = document.createElement('div');
    reasonDiv.classList.add('reason');
  
    // Tworzymy obrazek
    const img = document.createElement('img');
    img.src = reason.image;
  
    // Tworzymy opis
    const description = document.createElement('p');
    description.textContent = reason.description;
  
    // Dodajemy obrazek i opis do diva
    reasonDiv.appendChild(img);
    reasonDiv.appendChild(description);
  
    // Dodajemy div z powodem do sekcji "why_me"
    whyMeSection.appendChild(reasonDiv);

    reasonDiv.addEventListener('click', () => {
        window.location.href = reason.url;
    });
  });


