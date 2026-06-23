// **********************  all common function start ***************************
// logout button
document
    .getElementById("logout-btn")
    .addEventListener("click", function () {

        window.location.href = "./index.html";

    });

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
// function to input feild clear
function clearInputs(ids) {
    for (const id of ids) {
        document.getElementById(id).value = "";
    }
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
        btn.classList.remove("border-[3px]", "border-green-500");
        btn.classList.add("border", "border-gray-400");
    }
    document.getElementById(id).classList.remove("border", "border-gray-400");
    document.getElementById(id).classList.add("border-[3px]", "border-green-500");
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
        // const bankInfo = getValueWithoutParsIntNumber("bank-info");
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
        if (accountNumber.length !== 11) {
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

        // input clear
        clearInputs([
            "account-number",
            "add-withdraw-number",
            "pin-number"
        ]);

        // add money daynamic setting to transaction history
        const data = {
            name: "Add Money",
            date: new Date().toLocaleDateString(),
        };
        transactionData.push(data);
    });
// ---------------------add money section all function end-----------------------------

// -----------------cash out section start-----------------------
// set a pin number
const cashoutInValidNumber = 1234;
// add event listner
document
    .getElementById("withdraw-money-button")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // call the funtction
        const agentNumber = getValueWithoutParsIntNumber(
            "cashout-agent-number",
        );
        const cashOutWithdraw = getInputValueNumber("cashout-withdraw-number");
        const availableBalance = getInnerTextValue("available-amount");
        const cashOutPinNumber = getInputValueNumber("cashout-pin-number");

        // validation cashout blance
        if (cashOutWithdraw <= 0 || cashOutWithdraw > availableBalance) {
            alert("Insufficient balance. Maximum available balance is 45000 taka.");
            return;
        }

        // cheek agent number is valid and ensure they given must be 11 digit
        if (agentNumber.length !== 11) {
            alert("Enter must be 11 digit number");
            return;
        }

        // cheek pin number
        if (cashOutPinNumber !== cashoutInValidNumber) {
            alert("You type 5678 number .This is pin number");
            return;
        }

        //  subtraction to the total amount and cashout withdraw amount
        const newCashoutBalance =
            availableBalance - cashOutWithdraw;
        setInnerText(newCashoutBalance);

        // clear inputs
        clearInputs([
            "cashout-agent-number",
            "cashout-withdraw-number",
            "cashout-pin-number"
        ]);

        // cashout daynamic setting to transaction history
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleDateString(),
        };
        transactionData.push(data);
    });
// --------------------------cash out section end--------------------------
// ------------------------------transfer money start----------------------
// set a pin number
const transfervalidPin = 1234;

document.getElementById("transfer-money-button").addEventListener('click', function (event) {
    event.preventDefault();

    // call the function 
    const transferAccountNumber = getValueWithoutParsIntNumber("transfer-input-account-number");
    const transferAmount = getInputValueNumber("transfer-amount-input-number");
    const transferPinNumber = getInputValueNumber("transfer-input-pin-number");
    const transferCurrentBlance = getInnerTextValue("available-amount");

    // validation
    if (transferAccountNumber.length !== 11) {
        alert("Please enter a valid account number must be given 11 digit");
        return;
    }
    if (transferAmount <= 0 || transferAmount > transferCurrentBlance) {
        alert("Enter a valid amount ");
        return;
    }
    if (transferPinNumber !== transfervalidPin) {
        alert("Enter 5678 your pin number");
        return;
    }

    //  subtraction to the avaible amount and transfer amount
    const newTransferBlance = transferCurrentBlance - transferAmount;
    setInnerText(newTransferBlance);

    // clear inputs
    clearInputs([
        "transfer-input-account-number",
        "transfer-amount-input-number",
        "transfer-input-pin-number"
    ]);


    // transfer daynamic setting to transaction history
    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleDateString(),
    };

    transactionData.push(data);

})

// ------------------------------transfer money end----------------------

// --------------------------- get bonus start ----------------------------
// set a coupon number
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

        // get bonus daynamic setting to transaction history
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
        // call the function
        const billerAccount =
            getValueWithoutParsIntNumber("bill-account-input-number");

        const billAmount =
            getInputValueNumber("amount-to-pay-input");

        const pinNumber =
            getInputValueNumber("pay-bill-input-number");

        // validation
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
        // pay bill daynamic setting to transaction history
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
