import throttle from 'lodash.throttle';
import '../css/01-gallery.css';
import '../css/common.css';



const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const inputEmail = document.querySelector('input')
const STORAGE_KEY = "feedback-form-state";
let formData = {};



form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(inputForm, 500));

populateTextarea();

function onFormSubmit(ev) {
    ev.preventDefault();
     console.log(formData);
    ev.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
    
 }


function inputForm(ev) {
    formData[ev.target.name] = ev.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}




function populateTextarea(ev) {

    const dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
  if (dataForm.email) {
    inputEmail.value = dataForm.email;
    formData.email = dataForm.email;
  }

  if (dataForm.message) {
    textarea.value = dataForm.message;
    formData.message = dataForm.message;
  }
    

}