function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal == "0" || principal == "" || Math.sign(principal) == "-1") {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit : " + principal + ",\<br\>at an interest rate of : " + rate + "%,\<br\>You will receive an amount of : " + interest + ",\<br\>in the year : " + year + ".\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

new Glide(".glide", {
    startAt: 2,
    perView: 1,
    animationDuration: 1000,
}).mount();
        