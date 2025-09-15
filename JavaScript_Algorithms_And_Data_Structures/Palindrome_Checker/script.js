let checkBtn = document.querySelector('#check-btn');
let textInput = document.querySelector('#text-input');
let result = document.querySelector('#result');

function isPalindrome(strInput) {
    if (strInput.length === 1) { return true };

    // Normalize string by removing non-alphanumeric, and converting to lowercase
    strInput = strInput.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // Set palindrome to be its reverse
    let palindrome = strInput.split("").reverse().join("");

    return (strInput == palindrome);
}

checkBtn.addEventListener('click', function() {
    if (!textInput.value) {
        alert("Please input a value");
    } else {
        result.textContent = (`${textInput.value} is ${isPalindrome(textInput.value) ? "" : "not "}a palindrome`);
    }
});