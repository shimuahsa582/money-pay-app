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

// togglle to section
function toggleButtons(id) {
    const toggles = document.getElementsByClassName("toggle-section");
    for (const toggle of toggles) {
        toggle.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// toggle to button
function handleToggleButtons(id) {
    const toogleBtn = document.getElementsByClassName("toggle-btn");
    for (const btn of toogleBtn) {
        btn.classList.remove("border-[1px]", "border-green-500");
        btn.classList.add("border", "border-gray-400");
    }
    document.getElementById(id).classList.remove("border", "border-gray-400");
    document.getElementById(id).classList.add("border-[1px]", "border-green-500");
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
    .getElementById("transaction-button")
    .addEventListener("click", function (event) {
        toggleButtons("transaction-section");
        handleToggleButtons("transaction-button");
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

        // validation add money addWitdrawNumber number
        if (addWitdrawNumber <= 0) {
            alert("invalid number");
            return;
        }

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
            date: new Date().toLocaleDateString(),
        };
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
        const availableBalance = getInnerTextValue("available-amount");
        const cashOutPinNumber = getInputValueNumber("cashout-pin-number");

        // validation cashout blance
        if (cashOutWithdraw <= 0 || cashOutWithdraw > availableBalance) {
            alert("Your blance is not avaible avaible.you withdraw heighst 45000 taka");
            return;
        }

        // cheek agent number is valid and ensure they given must be 11 digit
        if (agentAgentNumber.length < 11) {
            alert("Enter must be 11 digit number");
            return;
        }

        // cheek pin number
        if (cashOutPinNumber !== cashoutInValidNumber) {
            alert("You type 5678 number .This is pin number");
            return;
        }

        //  subtraction to the total amount and cashout withdraw amount
        const newAvailbleCashoutNumber =
            availableBalance - cashOutWithdraw;
        setInnerText(newAvailbleCashoutNumber);
        // transction dainamic setting
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleDateString(),
        };
        transactionData.push(data);
    });
// --------------------------cash out section end--------------------------

// --------------------------- get bonus start ----------------------------
const validCoupon = "PAYOO100";
document.getElementById("bonus-button")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const couponCode =
            getValueWithoutParsIntNumber("get-bonus-input-number");

        if (couponCode !== validCoupon) {
            alert("Invalid Coupon Code");
            return;
        }

        const currentBalance =
            getInnerTextValue("available-amount");

        const bonusAmount = 100;

        const newBalance =
            currentBalance + bonusAmount;

        setInnerText(newBalance);

        const data = {
            name: "Bonus Added",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);

        alert("100 Taka Bonus Added");
    });
//-------------------------- get bonus end---------------------------
// ----------------------------pay bill section ---------------------
document.getElementById("bill-button")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const billerAccount =
            getValueWithoutParsIntNumber("bill-account-input-number");

        const billAmount =
            getInputValueNumber("amount-to-pay-input");

        const pinNumber =
            getInputValueNumber("pay-bill-input-number");

        if (billerAccount.length < 11) {
            alert("Please enter valid account number");
            return;
        }

        if (pinNumber !== 1234) {
            alert("Invalid Pin Number");
            return;
        }

        const currentBalance =
            getInnerTextValue("available-amount");

        if (billAmount > currentBalance) {
            alert("Insufficient Balance");
            return;
        }

        const newBalance =
            currentBalance - billAmount;

        setInnerText(newBalance);

        const data = {
            name: "Pay Bill",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);

        alert("Bill Payment Successful");
    });
// --------------------------- pay bill end --------------------------------

// -------------------------transction section start -----------------------
document
    .getElementById("transaction-button")
    .addEventListener("click", function (event) {
        const transactionContainer = document.getElementById(
            "transaction-container",
        );

        transactionContainer.innerHTML = "";
        for (const data of transactionData) {
            const div = document.createElement("div");

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
        `;
            transactionContainer.appendChild(div);
        }
    });
// -------------------------transction section end -----------------------
