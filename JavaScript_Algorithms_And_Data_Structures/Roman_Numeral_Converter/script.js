let number = document.querySelector('#number');
let convertBtn = document.querySelector('#convert-btn');
let output = document.querySelector('#output');

function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

function romanNumeralConverter(number) {
    let romanNumeral = {
        1000: 'M', 900: 'CM', 500: 'D',
        400: 'CD', 100: 'C', 90: 'XC',
        50: 'L', 40: 'XL', 10: 'X', 9: 'IX',
        5: 'V', 4: 'IV', 1: 'I' };

    let convertedRomanNumeral = "";

    // Error Handling
    if (number < 1) { // ERROR: Non-natural number
        return "Please enter a number greater than or equal to 1";
    } else if (number > 3999) { // ERROR: Number exceeds the maximum value
        return "Please enter a number less than or equal to 3999";
    }

    // Separate thousand's, hundred's, ten's, and one's value
    let thousandsPlace = Math.floor(number / 1000);
    let hundredsPlace = Math.floor((number % 1000) / 100);
    let tensPlace = Math.floor((number % 100) / 10);
    let onesPlace = Math.floor((number % 10) / 1);

    // DEBUG: Check values
    console.log(`Thousands: ${thousandsPlace}`);
    console.log(`Hundreds: ${hundredsPlace}`);
    console.log(`Tens: ${tensPlace}`);
    console.log(`Ones: ${onesPlace}`);

    // Convert each value to a roman numeral
    // Thousands
    convertedRomanNumeral += romanNumeral[1000].repeat(thousandsPlace);

    // Hundreds
    if (hundredsPlace === 9)
        convertedRomanNumeral += romanNumeral[900];
    else if (hundredsPlace >= 5)
        convertedRomanNumeral += romanNumeral[500] + romanNumeral[100].repeat(hundredsPlace - 5);
    else if (hundredsPlace === 4)
        convertedRomanNumeral += romanNumeral[400];
    else
        convertedRomanNumeral += romanNumeral[100].repeat(hundredsPlace);
      
    if (tensPlace === 9)
        convertedRomanNumeral += romanNumeral[90];
    else if (tensPlace >= 5)
        convertedRomanNumeral += romanNumeral[50] + romanNumeral[10].repeat(tensPlace - 5);
    else if (tensPlace === 4)
        convertedRomanNumeral += romanNumeral[40];
    else
        convertedRomanNumeral += romanNumeral[10].repeat(tensPlace);
    
    if (onesPlace === 9)
        convertedRomanNumeral += romanNumeral[9];
    else if (onesPlace >= 5)
        convertedRomanNumeral += romanNumeral[5] + romanNumeral[1].repeat(onesPlace - 5);
    else if (onesPlace === 4)
        convertedRomanNumeral += romanNumeral[4];
    else
        convertedRomanNumeral += romanNumeral[1].repeat(onesPlace);

    return convertedRomanNumeral;
}

convertBtn.addEventListener('click', function() {
    const num = parseInt(number.value, 10);
    if (isNaN(num)) {
        output.textContent = "Please enter a valid number";
    } else {
        output.textContent = romanNumeralConverter(parseInt(number.value));
    }
});