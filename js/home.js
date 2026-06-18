// function get input values 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFeildValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFeildValue);
    return inputFieldValueNumber;
}

// function get input value without parsInt number 
function getValueWithoutParsIntNumber(IdWithoutParsIntNumber) {
    const inputTextWithoutNumber = document.getElementById(IdWithoutParsIntNumber);
    const inputTextFeildValue = inputTextWithoutNumber.value;
    return inputTextFeildValue;
}

// add money section all function start 
// set add money pin number 
const validPinNumber = 1234;
// add event listner handler
document
    .getElementById("add-money-button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        // call the function without parsInt value
        const bankInfo = getValueWithoutParsIntNumber("bank-info");
        const accountNumber = getValueWithoutParsIntNumber("account-number");
        // call the function parsInt value
        const addWitdrawNumber = getInputValueNumber("add-withdraw-number");
        const pinNumber = getInputValueNumber("pin-number");
        // cheek the valid account number when user try to enrty
        if (accountNumber.length < 11) {
            alert("please enter a valid account number must be 11 digit");
            return;
        }
        // cheek pin number 
        if (pinNumber !== validPinNumber) {
            alert("Enter your pin number 1234 otherwise this code not excicute");
            return;
        }
        // access available-amount id
        const addTotalAmount = parseInt(
            document.getElementById("available-amount").innerText
        );
        //  sum to the total amount and bank withdraw amount
        const newTotalAmountSum = addWitdrawNumber + addTotalAmount;
        document.getElementById("available-amount").innerText = newTotalAmountSum;
    });
// add money section all function end

//toggle feature add money and cash out section
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
    // call the funtction 
    const agentAgentNumber = getValueWithoutParsIntNumber('cashout-agent-number');
    const cashOutWithdraw = getInputValueNumber('cashout-withdraw-number');
    const cashOutPinNumber = getInputValueNumber('cashout-pin-number');

    // cheek agent number is valid and ensure they givien must be 11 digit 
    if (agentAgentNumber.length < 11) {
        alert("Enter must be 11 digit number");
        return;
    }
    // cheek pin number
    if (cashOutPinNumber !== cashoutInValidNumber) {
        alert("you drop the 5678 pin number");
        return;
    }
    // access available-amount
    const addTotalCashoutAmount = parseInt(
        document.getElementById("available-amount").innerText
    );
    //  subtraction to the total amount and cashout withdraw amount
    const newCashoutNumber = addTotalCashoutAmount - cashOutWithdraw;
    // 
    document.getElementById('available-amount').innerText = newCashoutNumber;
})
// cash out section end