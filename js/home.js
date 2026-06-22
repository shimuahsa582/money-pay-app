// **********************  all common function start ***************************

// function get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFeildValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFeildValue);
    return inputFieldValueNumber;
}

// function get input value without parsInt number
function getValueWithoutParsIntNumber(id) {
    const inputTextWithoutNumber = document.getElementById(id);
    const inputTextFeildValue = inputTextWithoutNumber.value;
    return inputTextFeildValue;
}

// function get innerText value
function getInnerTextValue(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

// functio to set innerText 
function setInnerText(value) {
    const availableBlanceAmount = document.getElementById("available-amount");
    availableBlanceAmount.innerText = value;
}

// togglle button
function toggleButtons(id) {
    const toggles = document.getElementsByClassName("toggle-section");
    for (const toggle of toggles) {
        toggle.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// toggle to section
function handleToggleButtons(id) {
    const toogleBtn = document.getElementsByClassName('toggle-btn');
    console.log("this is toogel", toogleBtn);
    for (const btn of toogleBtn) {
        btn.classList.remove("rounded-2xl", "border");
        btn.classList.add("border-[5px]");
    }
    document.getElementById(id).classList.remove("border-[5px]");
    document.getElementById(id).classList.add("rounded-2xl", "border");

}


// **********************  all common function end ***************************
//----------------------- all toggle feauture --------------------------
// add money button and section
document
    .getElementById("addMoney-button")
    .addEventListener("click", function (event) {
        toggleButtons("add-money-section");
        handleToggleButtons("addMoney-button");


    });
// cash out button and section
document
    .getElementById("cashOut-button")
    .addEventListener("click", function (event) {
        toggleButtons("cash-out-section");
        handleToggleButtons("cashOut-button");
    });
// transfer button and section 
document
    .getElementById("transfer-button")
    .addEventListener("click", function (event) {
        toggleButtons("transfer-section");
        handleToggleButtons("transfer-button");
    });

// get bonus button and section 
document
    .getElementById("get-bonus-button")
    .addEventListener("click", function (event) {
        toggleButtons("get-bonus-section");
        handleToggleButtons("get-bonus-button");
    });
// pay bill button and section 
document
    .getElementById("pay-bill-button")
    .addEventListener("click", function (event) {
        toggleButtons("pay-bill-section");
        handleToggleButtons("pay-bill-button");
    });
// transction button and section 
document
    .getElementById("transction-button")
    .addEventListener("click", function (event) {
        toggleButtons("transaction-section");
        handleToggleButtons("transction-button");
    });

//----------------------- all toggle feauture end--------------------------

// ----------------add money section all function start------------------------
// set add money pin number
const validPinNumber = 1234;
const transactionData = [];
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
        // call the function available-amount id
        const addTotalAvailableAmount = getInnerTextValue("available-amount");
        //  sum to the avaible total amount and bank withdraw amount
        const newTotalAvailableAmount = addWitdrawNumber + addTotalAvailableAmount;
        setInnerText(newTotalAvailableAmount);

        // transction dainamic setting
        const data = {
            name: "Add Money",
            date: new Date().toLocaleDateString()
        }
        transactionData.push(data);

    });
// ---------------------add money section all function end-----------------------------

// -----------------cash out section start-----------------------
// set a pin number
const cashoutInValidNumber = 5678;
// add event listner
document
    .getElementById("withdraw-money-button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        // call the funtction
        const agentAgentNumber = getValueWithoutParsIntNumber(
            "cashout-agent-number",
        );
        const cashOutWithdraw = getInputValueNumber("cashout-withdraw-number");
        const cashOutPinNumber = getInputValueNumber("cashout-pin-number");

        // cheek agent number is valid and ensure they givien must be 11 digit
        if (agentAgentNumber.length < 11) {
            alert("Enter must be 11 digit number");
            return;
        }
        // cheek pin number
        if (cashOutPinNumber !== cashoutInValidNumber) {
            alert("You type 5678 number .This is pin number");
            return;
        }
        // call the function available-amount id
        const totalavailbleCashoutAmount = getInnerTextValue("available-amount");

        //  subtraction to the total amount and cashout withdraw amount
        const newAvailbleCashoutNumber = totalavailbleCashoutAmount - cashOutWithdraw;
        setInnerText(newAvailbleCashoutNumber)
        // transction dainamic setting
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleDateString()
        }
        transactionData.push(data);

    });
// --------------------------cash out section end--------------------------
// -------------------------transction section start -----------------------
document.getElementById('transction-button').addEventListener('click', function (event) {
    const transactionSection = document.getElementById('transaction-section');
    transactionSection.innerHTML = "";
    for (const data of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="transaction-details flex justify-between items-center bg-[#FFFFFF] shadow rounded-xl p-4 mt-3">
            <div class="left flex items-center">
                <div class="flex bg-[#d4d4d4] rounded-xl p-1.5 mr-3">
                    <img src="assets/purse1.png" alt="">
                </div>
                <div>
                    <h4>${data.name}</h4>
                    <p>${data.date}</p>
                </div>
            </div>
            <div class="mr-2">
                <i class="fa-solid fa-ellipsis "></i>
            </div>
        </div>
        `
        transactionSection.appendChild(div);
    }

})





// toggle - section //22 number line
