const skills = [
    
    {
        text: "HTML/CSS",
        url: "https://github.com/stars/KSierpowski/lists/htlm-css",
        text_hover: "Show GitHub",
        img: "./images/github_icon.png",
    },

    {
        text: "JavaScript",
        url: "https://github.com/stars/KSierpowski/lists/javascript",
        text_hover: "Show GitHub",
        img: "./images/github_icon.png",
    },
    {
        text: "C#/Unity",
        url: "https://github.com/stars/KSierpowski/lists/c-unity",
        text_hover: "Show GitHub",
        img: "./images/github_icon.png"
    },

    {
        text: "Sound Engr.",
        url: "https://soundcloud.com/ksierpowski/sets/mixmaster-work",
        text_hover: "Show SoundCloud",
        img: "./images/soundcloud_icon.png",
    },
]

const mySkillsSection = document.querySelector('.right_panel');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

  
    const text = document.createElement('p');
    text.textContent = skill.text;
  
    const text_hover = document.createElement('span');
    text_hover.textContent = skill.text_hover;

    const img = document.createElement('img');
    img.src = skill.img;
 
    skillDiv.appendChild(text);
    skillDiv.appendChild(text_hover);
    text_hover.appendChild(img);


    skillDiv.addEventListener('mouseenter', () => {
        if (window.innerWidth > 576) {
            text.style.display = 'none';
            text_hover.style.display = 'block';
            img.style.display = 'none';
        } else {
            text.style.display = 'none';
            text_hover.style.display = 'block';
            img.style.display = 'none';
        }
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

