import { TextField } from './classes/textfield.js';
import { EmailField } from './classes/emailfield.js';
import { PasswordField } from './classes/passwordfield.js';

let firstName = new TextField("firstname");
let lastName = new TextField("lastname");
let email = new EmailField("email");
let password = new PasswordField("password");
let confirmPassword = new PasswordField("confirm-password");

window.addEventListener("DOMContentLoaded", function() {
    
}