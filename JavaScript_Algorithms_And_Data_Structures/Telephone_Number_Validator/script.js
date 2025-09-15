let userInput = document.querySelector('#user-input');
let checkBtn = document.querySelector('#check-btn');
let clearBtn = document.querySelector('#clear-btn');
let results = document.querySelector('#results-div');

function validateNumber(number) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(number) || /^(1\s?)?\d{3}[\s]?\d{3}[\s]?\d{4}$/.test(number);
}

checkBtn.addEventListener('click', function() {
    let inputValue = userInput.value;
    if (inputValue == "") {
        alert("Please provide a phone number");
    } else {
        let validNumber = validateNumber(inputValue);
        if (validNumber) {
            results.textContent = `Valid US number: ${inputValue}`;
        } else results.textContent = `Invalid US number: ${inputValue}`;
    }
});

clearBtn.addEventListener('click', function() {
    userInput.value = "";
    results.textContent = "";
});
