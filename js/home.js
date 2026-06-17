// add money section all function start 
// set add money pin number 
const validPinNumber = 1234;
// add event listner handler
document
    .getElementById("add-money-button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        // access all input id
        const bankInfo = document.getElementById("bank-info").value;
        const accountNumber = document.getElementById("account-number").value
            ;
        const addWitdrawNumber = parseInt(
            document.getElementById("add-withdraw-number").value,
        );
        const pinNumber = parseInt(document.getElementById("pin-number").value);

        // cheek the user giving valid account number 
        if (accountNumber.length < 11) {
            alert("please enter a valid account number must be 11 digit");
            return;
        }
        // cheek pin number 
        if (pinNumber !== validPinNumber) {
            alert("Enter your pin number 1234 otherwise this code not excicute");
            return;
        }
        // access add total amount id
        const addTotalAmount = parseInt(
            document.getElementById("add-total-amount").innerText
        );

        //  sum to the total amount and bank withdraw amount
        const newTotalAmountSum = addWitdrawNumber + addTotalAmount;

        document.getElementById("add-total-amount").innerText = newTotalAmountSum;
    });
// add money section all function end

//toggle feture add money and cash out section

// add money button 
document.getElementById('addMoney-button').addEventListener('click', function () {
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
})

// cash out button
document.getElementById('cashOut-button').addEventListener('click', function () {
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
})

// cash out section start 
// set a pin number
const cashoutInValidNumber = 5678;
// add event listner 
document.getElementById('withdraw-money-button').addEventListener('click', function (event) {
    event.preventDefault();
    // access all cash out input button 
    const agentAgentNumber = document.getElementById('cashout-agent-number').value;
    const cashOutWithdraw = parseInt(document.getElementById('cashout-withdraw-number').value);
    const cashOutPinNumber = parseInt(document.getElementById('cashout-pin-number').value);


    // cheek agent number is valid ? ensure they givien must be 11 digit 
    if (agentAgentNumber.length < 11) {
        alert("Enter must be 11 digit number");
        return;
    }
    // cheek pin number
    if (cashOutPinNumber !== cashoutInValidNumber) {
        alert("you drop the 5678 pin number");
        return;
    }
    // access add total amount id
    const addTotalCashoutAmount = parseInt(
        document.getElementById("add-total-amount").innerText
    );
    //  sub to the total amount and cashout withdraw amount
    const newCashoutNumber = addTotalCashoutAmount - cashOutWithdraw;
    // 
    document.getElementById('add-total-amount').innerText = newCashoutNumber;
})
// cash out section end