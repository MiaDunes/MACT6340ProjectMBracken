(function() {
    "use strict"

    let form = document.querySelectorAll('#contact-form')
    
    // document.querySelector("#contact-form-button").addEventListener("click", submitMail);
    document.querySelector("#contact-form-button").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let formValid = true;
        if (!form.checkValidity()) {
           formValid = false;
        }
        form.classList.add('was-validated');
        if (formValid) {
            sendTheEmail();
        }

    });
    function sendTheEmail() {
        console.log("You clicked the submit button.");
        let firstname = document.querySelector("#first-name").value;
        let lastname = document.querySelector("#last-name").value;
        let email = document.querySelector("#mail").value;
        let message = document.querySelector("#msg").value;
        console.log("First name: " + firstname);
        console.log("Last name: " + lastname);
        console.log("Email: " + email);
        console.log("Message: " + message);  

    }   

}());


// function submitMail() {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log("You clicked the submit button.");
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#mail").value;
//     let message = document.querySelector("#msg").value;
//     console.log("Name: " + name);
//     console.log("Email: " + email);
//     console.log("Message: " + message);
// }