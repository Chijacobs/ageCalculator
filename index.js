//output elements//
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');
const msg = document.querySelector('.msg');

//input element//
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

//Error Elements
const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month');
const error_day = document.querySelector('.error-day');

let isValid = false
submit_btn.addEventListener('click', calculatedate);
input_day.addEventListener('input', (e) => {
    if (+input_day.value > 31) {
        error_day.textContent = "Date must be valid";
        isValid = false;
        return;
    }   else {
        isValid = true;
        error_day.textContent = "";
    }
    if (+input_day.value === 0) {
        isValid = false
        error_day.textContent = "Is required";
        isValid = false;
        return;
    } else {
        error_day.textContent = "";
    }
})

input_month.addEventListener('input', (e) => {
    if (+input_month.value > 12) {
        error_month.textContent = "Month must be valid";
        isValid = false;
        return;
    }   else {
        isValid = true;
        error_month.textContent = "";
    }
    if (+input_month.value === 0) {
        isValid = false
        error_month.textContent = "Is required";
        isValid = false;
        return;
    } else {
        error_month.textContent = "";
    }
});

input_year.addEventListener('input', (e) => {
    if (+input_year.value > 2023) {
        error_year.textContent = "Year must be valid";
        isValid = false;
        return;
    }   else {
        isValid = true;
        error_year.textContent = "";
    }
    if (+input_year.value === 0) {
        isValid = false
        error_year.textContent = "Is required";
        isValid = false;
        return;
    } else {
        error_year.textContent = "";
    }
});

function calculatedate(){
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;

    } else {
        msg.classList.add('error');
        msg.innerHTML ='Fields are required';
    }
}



