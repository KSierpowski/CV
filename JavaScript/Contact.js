
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
        alert("Complete the required fields!");
    }
}
document.querySelector(".contact_area").addEventListener("submit", function (e) {

    e.preventDefault();
    redAlert(this);
if(allInformation){

    emailjs.sendForm("service_jokvpnr","template_2kjetww", this)
    .then(function (response) {
        alert("The message was sent successfully!");
        document.querySelector(".contact_area").reset();
    })
    .catch(function (error) {
        alert("An unexpected error occurred while sending a message: " + error);
        document.querySelector(".contact_area").reset();
    });
}
});
const inputElements = document.querySelectorAll('.contact .contact_area input[type="text"], .contact .contact_area input[type="email"], .contact .contact_area textarea');

inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', function() {
        this.style.color = 'antiquewhite';
        this.style.fontSize = '25px';
    });
});