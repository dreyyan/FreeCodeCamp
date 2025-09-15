let number = document.querySelector('#number');
let convertBtn = document.querySelector('#convert-btn');
let output = document.querySelector('#output');

function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

function romanNumeralConverter(number) {
    // Error Handling
    if (number < 1) { // ERROR: Non-natural number
        return "Please enter a number greater than or equal to 1";
    } else if (number > 3999) { // ERROR: Number exceeds the maximum value
        return "Please enter a number less than or equal to 3999";
    }

    let numberCopy = number; // Utilize a copy of the number

    // Separate thousand's, hundred's, ten's, and one's value
    numberCopy = numberCopy / 1000;
    let thousandsValue = Math.floor(numberCopy);

    numberCopy = number / 100;
    let hundredsValue = Math.floor(numberCopy);
    
    numberCopy = number / 10;
    let tensValue = Math.floor(numberCopy);

    numberCopy = number / 1;
    let onesValue = Math.floor(numberCopy);

    // DEBUG: Check values
    console.log(`Thousands: ${thousandsValue}`);
    console.log(`Hundreds: ${hundredsValue}`);
    console.log(`Tens: ${tensValue}`);
    console.log(`Ones: ${onesValue}`);

    // Convert each value to a roman numeral
    // If roman numeral repeats '5' or more times, convert to higher-order roman numeral
    // Join them together
}

convertBtn.addEventListener('click', function() {
    if (!number.value) {
        alert("Please enter a valid number");
    } else {
        output.textContent = romanNumeralConverter(number.value);
    }
});