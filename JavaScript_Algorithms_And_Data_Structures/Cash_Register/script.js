let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let cash = document.querySelector('#cash');
let purchaseBtn = document.querySelector('#purchase-btn');
let changeDue = document.querySelector('#change-due');

purchaseBtn.addEventListener('click', function() {
    if (cash > ) {
        changeDue.textContent = "Customer does not have enough money to purchase the item";
    }
});