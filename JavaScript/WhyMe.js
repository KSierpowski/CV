const reasons = [
    {
      id: 0,
      image: "./images/creative_icon.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      url: "./HTML/creativity.html",
    },
    {
      id: 1,
      image: "./images/helpful_icon.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      url: "./HTML/helpful.html",
    },
    {
      id: 2,
      image: "./images/study_icon.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
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
