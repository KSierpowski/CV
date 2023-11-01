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

const mySkillsSection = document.querySelector('.right_panel');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

  
    const text = document.createElement('p');
    text.textContent = skill.text;
  
    const text_hover = document.createElement('p2');
    text_hover.textContent = skill.text_hover;

    const img = document.createElement('img');
    img.src = skill.img;
 
    skillDiv.appendChild(text);
    skillDiv.appendChild(text_hover);
    text_hover.appendChild(img);


    skillDiv.addEventListener('mouseenter', () => {
        text.style.display = 'none';
        text_hover.style.display = 'block';
        img.style.display = 'block';
      });
    
      skillDiv.addEventListener('mouseleave', () => {
        text.style.display = 'block';
        text_hover.style.display = 'none';
        img.style.display = 'none';
      });
  
    // Dodajemy div z powodem do sekcji "why_me"
    mySkillsSection.appendChild(skillDiv);

    skillDiv.addEventListener('click', () => {
        window.location.href = skill.url;
    });
  });

  const inputElements = document.querySelectorAll('.contact .contact_area input[type="text"], .contact .contact_area input[type="email"], .contact .contact_area textarea');

inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', function() {
        this.style.color = '#00ffff';
        this.style.fontSize = '25px';
    });
});

emailjs.init("zvMWAfDPtt213CDnc");
let allInformation = false;

function redAlert(form) {
    // Pobierz wszystkie pola formularza
    const fields = form.querySelectorAll('input[name="subject"], input[name="fullName"], input[name="emailAdress"], textarea[name="message"]');

    // Zresetuj kolory obramowania pól
    fields.forEach(field => field.style.borderColor = "");

    allInformation = true;
    
    // Sprawdź, czy pola są uzupełnione
    fields.forEach(field => {
        if (field.value === "") {
            // Jeśli pole jest puste, zaznacz je na czerwono
            field.style.borderColor = "red";
            allInformation = false;
        }
    });

    if (!allInformation) {
        alert("Uzupełnij wymagane pola!");
    }
}
document.querySelector(".contact_area").addEventListener("submit", function (e) {

    e.preventDefault();
    redAlert(this);
if(allInformation){

    emailjs.sendForm("service_jokvpnr","template_2kjetww", this)
    .then(function (response) {
        alert("Wiadomość została wysłana pomyślnie!");
        document.querySelector(".contact_area").reset();
    })
    .catch(function (error) {
        alert("Wystąpił błąd podczas wysyłania wiadomości: " + error);
        document.querySelector(".contact_area").reset();
    });
}
});
