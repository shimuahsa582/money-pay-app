// login button
// create event listener handler
const loginButton = document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();

    // create 2 variable 
    const mobileNumber = 1953788932;
    const pinNumber = 1234;

    // get input value in mobile number
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumbersConverted = parseInt(mobileNumberValue);


    // get input value in pin number
    const digitPinNumberValue = document.getElementById('digit-pin-number').value;
    const digitPinNumberConverted = parseInt(digitPinNumberValue);

    // cheek value compare with mobile number and pin number
    if (mobileNumbersConverted === mobileNumber && digitPinNumberConverted === pinNumber) {
        // switch new page
        window.location.href = "./home.html";
    } else {
        console.log('invalid number');
    }
})
