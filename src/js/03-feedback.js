import throttle from 'lodash.throttle';
import '../css/01-gallery.css';
import '../css/common.css';



const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEmail = document.querySelector('input')
const STORAGE_KEY = "feedback-form-state";
const formData = {};

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(inputForm, 500));

function inputForm(ev) {
    formData[ev.target.name] = ev.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

populateTextarea();

function onFormSubmit(ev) {
    ev.preventDefault();
    ev.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
 }

function populateTextarea(ev) {
    
 if (dataForm) {
    inputEmail.value = dataForm.email;
    textarea.value = dataForm.message;
     }

}