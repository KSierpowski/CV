const reasons = [
    {
      id: 0,
      image: "./images/creative_icon.png",
      description: `A few reasons why I consider myself a creative person`,
      url: "./HTML/creativity.html",
    },
    {
      id: 1,
      image: "./images/experience_icon.png",
      description: `The most important work experience gathered in one place`,
      url: "./HTML/experience.html",
    },
    {
      id: 2,
      image: "./images/study_icon.png",
      description: `Private tattoo and sound production projects`,
      url: "./HTML/learners.html",
    },
  ];

  const whyMeSection = document.querySelector('.why_me');

// Iterujemy przez tablicę reasons
reasons.forEach(reason => {
    // Tworzymy div, który będzie reprezentować reason
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
