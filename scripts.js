const submitButton = document.getElementById('submit-product-button');
const fNumInput = document.getElementById('user-fnum');
const sNumInput = document.getElementById('user-snum');
const outputContainer = document.getElementById('output-product-container');

submitButton.addEventListener('click', (e) => {
    outputContainer.innerHTML = '';
    outputContainer.innerHTML = "Waiting For User Input...";
    e.preventDefault();
    let product = 0;
    let fnum = fNumInput.value;
    let snum = sNumInput.value;

    if (fnum != "" & snum != "") {
        product = fnum * snum;
        outputContainer.innerHTML = '';
        outputContainer.innerHTML = "The Result is " + product + ", Thank You For Filling The Form";
    }
    else {
        outputContainer.innerHTML = '';
        outputContainer.innerHTML = "Please Input Values In Both Input Fields, Thank You";
        setTimeout(() => {
            outputContainer.innerHTML = '';
            outputContainer.innerHTML = "Waiting For User Input...";
        }, 1500);
    }
});
function blockFirstNumber() {
    let firstNum = document.getElementById('user-fnum');
    firstNum.value = firstNum.value.replace(/[^0-9]/g, '');
}
function blockSecondNumber() {
    let secondNum = document.getElementById('user-snum');
    secondNum.value = secondNum.value.replace(/[^0-9]/g, '');
}