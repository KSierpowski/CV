const myProjects = [
    
    {
        id: 0,
        image: "./images/project_1.png",
        url: "https://ksierpowski.github.io/Webshop/",
        text: "A website based on a popular Polish electronics store",
    },
    {
        id: 1,
        image: "./images/project_2.png",
        url: "https://play.unity.com/mg/other/runrocket",
        text: "The game created based on the course",
    },
    {
        id: 2,
        image: "./images/project_3.png",
        url: "https://github.com/KSierpowski/todo-app",
        text: "First approach to ReactJS",
    },
    {
        id: 3,
        image: "./images/project_4.png",
        url: "https://play.unity.com/mg/other/webgl-builds-265337",
        text: "First game made from scratch",
    },
]



const projectsSection = document.querySelector('.my_projects');
const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');
const viewButton = document.querySelector('#viewButton');

let currentIndex = 0; 
let displayedProjectDiv = null; 

function fadeIn(element) {
  element.style.opacity = 0;
  let opacity = 0;
  const fadeEffect = setInterval(function () {
      if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity;
      } else {
          clearInterval(fadeEffect);
      }
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;
  const fadeEffect = setInterval(function () {
      if (opacity > 0) {
          opacity -= 0.1;
          element.style.opacity = opacity;
      } else {
          clearInterval(fadeEffect);
      }
  }, 50);
}

function updateButtonHeight() {
  const img = displayedProjectDiv.querySelector('img');
  if (img) {
      const imgHeight = img.clientHeight;
      nextButton.style.height = imgHeight + 'px';
      prevButton.style.height = imgHeight + 'px';
  }
}
// Funkcja, która usuwa poprzedni projekt i wyświetla nowy na podstawie aktualnego indeksu
function displayProject() {
    if (displayedProjectDiv) {
       projectsSection.removeChild(displayedProjectDiv); // Usuń poprzedni projekt
        fadeOut(displayedProjectDiv);
    }

    const project = myProjects[currentIndex];
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const img = document.createElement('img');
    img.src = project.image;


    const text = document.createElement('text');
    text.textContent = project.text;

    projectDiv.appendChild(img);
    projectDiv.appendChild(text);

    projectDiv.style.opacity = 0;
    projectsSection.appendChild(projectDiv);

    img.onload = function() {
      updateButtonHeight();
  };

    fadeIn(projectDiv);
    displayedProjectDiv = projectDiv; // Aktualizuj referencję do wyświetlanego projektu
    currentProject = project;
  
}
// Po pierwszym załadowaniu strony także aktualizuj wysokość przycisków
window.addEventListener('load', function() {
  updateButtonHeight();
});
displayProject(); 


viewButton.addEventListener('click', () => {
if (currentProject) {
  window.location.href = currentProject.url; // Otwórz URL obecnego projektu
}
});


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


