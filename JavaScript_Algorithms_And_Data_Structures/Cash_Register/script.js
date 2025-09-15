let price = 19.5; 
let cid = [
  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
  ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
];

let denomValues = {
  'ONE HUNDRED': 100,
  'TWENTY': 20,
  'TEN': 10,
  'FIVE': 5,
  'ONE': 1,
  'QUARTER': 0.25,
  'DIME': 0.10,
  'NICKEL': 0.05,
  'PENNY': 0.01
};

let cash = document.querySelector('#cash');
let purchaseBtn = document.querySelector('#purchase-btn');
let changeDue = document.querySelector('#change-due');

function purchase() {
    changeDue.textContent = "";

    let change = Number(cash.value) - price;
    let originalChange = change;

    // Clone and reverse cid for high-to-low
    let reversedCid = [...cid].reverse();

    let changeArray = [];
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0);

    if (totalCid < change) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    for (let [name, amountInDrawer] of reversedCid) {
        let denomValue = denomValues[name];
        let amountToReturn = 0;

        while (change >= denomValue && amountInDrawer > 0) {
            change = Math.round((change - denomValue) * 100) / 100;
            amountInDrawer = Math.round((amountInDrawer - denomValue) * 100) / 100;
            amountToReturn = Math.round((amountToReturn + denomValue) * 100) / 100;
        }

        if (amountToReturn > 0) {
            changeArray.push([name, amountToReturn]);
        }
    }

    // If exact change can't be returned
    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    // Check if drawer is emptied exactly
    let changeTotal = changeArray.reduce((sum, curr) => sum + curr[1], 0);
    if (Math.round(changeTotal * 100) / 100 === totalCid) {
        // CLOSED status: return all denominations in high-to-low order
        let closedArray = reversedCid.map(d => [d[0], d[1]]).filter(d => d[1] > 0);
        let resultText = closedArray.map(d => `${d[0]}: $${d[1].toFixed(2)}`).join(' ');
        changeDue.textContent = `Status: CLOSED ${resultText}`;
    } else {
        let resultText = changeArray.map(d => `${d[0]}: $${d[1].toFixed(2)}`).join(' ');
        changeDue.textContent = `Status: OPEN ${resultText}`;
    }
}

purchaseBtn.addEventListener('click', function() {
    if (cash.value < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (cash.value == price) {
      changeDue.textContent = "No change due - customer paid with exact cash";
    } else purchase();
});