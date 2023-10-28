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


  const projectsSection = document.querySelector('.my_projects');
  const nextButton = document.querySelector('#nextButton');
  const prevButton = document.querySelector('#prevButton');

  let currentIndex = 0; 
  let displayedProjectDiv = null; 
  
  // Funkcja, która usuwa poprzedni projekt i wyświetla nowy na podstawie aktualnego indeksu
  function displayProject() {
      if (displayedProjectDiv) {
          projectsSection.removeChild(displayedProjectDiv); // Usuń poprzedni projekt
          
      }
  
      const project = myProjects[currentIndex];
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
  
      const img = document.createElement('img');
      img.src = project.image;
  
      const button = document.createElement('button');
      button.textContent = project.button;
  
      projectDiv.appendChild(img);
      projectDiv.appendChild(button);
  
      projectsSection.appendChild(projectDiv);
      displayedProjectDiv = projectDiv; // Aktualizuj referencję do wyświetlanego projektu
  
      button.addEventListener('click', () => {
          window.location.href = project.url;
      });
  }
  
  displayProject(); 
  
  nextButton.addEventListener('click', () => {
      currentIndex++; 
      if (currentIndex >= myProjects.length) {
          currentIndex = 0; // Wróć do pierwszego projektu, jeśli przekroczono zakres
      }
      displayProject(); 
  });
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=myProjects.length -1
    } 
    
        
    
    displayProject(); 
});

