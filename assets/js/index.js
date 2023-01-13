import { TextField } from './classes/textfield.js';
import { EmailField } from './classes/emailfield.js';
import { PasswordField } from './classes/passwordfield.js';
import { Form } from './classes/form.js';

window.addEventListener("DOMContentLoaded", function() {

    let firstNameId = document.getElementById("firstname");
    let lastNameId = document.getElementById("lastname");
    let emailId = document.getElementById("email");
    let passwordId = document.getElementById("password");
    let confirmPasswordId = document.getElementById("confirm-password");

    let firstName = new TextField(firstNameId);
    let lastName = new TextField(lastNameId);
    let email = new EmailField(emailId);
    let password = new PasswordField(passwordId);
    let confirmPassword = new PasswordField(confirmPasswordId);

    firstName.name = firstNameId.getAttribute("name");
    lastName.name = lastNameId.getAttribute("name");
    email.name = emailId.getAttribute("name");
    password.name = passwordId.getAttribute("name");
    confirmPassword.name = confirmPasswordId.getAttribute("name");
    
    let form = new Form();
    form.addField(firstName);
    form.addField(lastName);
    form.addField(email);
    form.addField(password);
    form.addField(confirmPassword);
    
    let userInformation = document.getElementById("user-information");
    userInformation.addEventListener("submit", function(envent) {
        event.preventDefault();
        form.submit();
    });
});