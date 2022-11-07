new Glide(".glide", {
    startAt: 2,
    perView: 1,
    gap: 0,
    animationDuration: 1000,
}).mount();


//----------------------------Calc-1----------------------------//

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function compute() {
    let principalBox = document.getElementById("principal");
    let principal = principalBox.value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    if(principal == "0" || principal == "" || Math.sign(principal) == "-1") {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    let interest = principal * years * rate /100;
    let newPrincipal = +principal + interest;
    let year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit : " + principal + ",\<br\>at an interest rate of : " + rate + "%,\<br\>You will receive an amount of : " + interest + ",\<br\>And your new total amount would be : " + newPrincipal + ",\<br\>in the year : " + year + ".\<br\>";
}

let resetBtn = document.getElementById("resetAll");
resetBtn.style.marginLeft = "10px";

function reset() {
    let principalBox = document.getElementById("principal");
    principalBox.value = "";

    let rateBox = document.getElementById("rate");
    rateBox.value = "10.25"
    document.getElementById("rate_val").innerText=rateBox.value + "%";

    let selectYears = document.getElementById("years");
    let firstSelect = document.getElementById("firstSelect");
    selectYears.value = firstSelect.value;

    document.getElementById("result").innerHTML="If you deposit : " + "\<br\>at an interest rate of : " + "\<br\>You will receive an amount of : " + "\<br\>And your new total amount would be : " + "\<br\>in the year : " + "\<br\>";
}


//----------------------------Other Calcs----------------------------//

ActivateCalc(".calc-2 .result-display #topRBox", ".calc-2 .result-display #bottomRBox", ".calc-2 .number-set button", "equalsTo-2");
ActivateCalc(".calc-3 .result-display #topRBox", ".calc-3 .result-display #bottomRBox", ".calc-3 .number-set button", "equalsTo-3");
ActivateCalc(".calc-4 .result-display #topRBox", ".calc-4 .result-display #bottomRBox", ".calc-4 .number-set button", "equalsTo-4");


function ActivateCalc(calcnumT, calcnumB, calcnumBtns, calcEquals) {
    let topRBox = document.querySelector(calcnumT);
    let bottomRBox = document.querySelector(calcnumB);

    let buttons = document.querySelectorAll(calcnumBtns);

    buttons.forEach(button => {
        button.onclick = () => {
            if (button.id == "clear") {
                topRBox.innerText = "0";
                bottomRBox.innerText = "0";
            }
            else if (bottomRBox.innerText != "0" && button.id == calcEquals && bottomRBox.innerText != "Empty!") {
                topRBox.innerText = eval(bottomRBox.innerText);
            }
            else if (bottomRBox.innerText == "0" && button.id == calcEquals) {
                bottomRBox.innerText = "Empty!";
                setTimeout(() => (bottomRBox.innerText = "0"), 3000);
            }
            else if (bottomRBox.innerText == "0" && button.value == "000") {
                topRBox.innerText = "0";
                bottomRBox.innerText = "0";
            }
            else if (bottomRBox.innerText == "0" && button.classList != "operation") {
                topRBox.innerText = "";
                bottomRBox.innerText = "";
                bottomRBox.innerText += button.value;
                topRBox.innerText = eval(bottomRBox.innerText);
            }
            else if (bottomRBox.innerText == "0" && button.classList == "operation") {
                topRBox.innerText = "0";
                bottomRBox.innerText = "0";
            }
            else {
                bottomRBox.innerText += button.value;
                topRBox.innerText = eval(bottomRBox.innerText);
            }
        }
    })
}
