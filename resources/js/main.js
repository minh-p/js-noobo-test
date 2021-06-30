// dynamically doing this is very gucci

function doSomeMath(num1, num2) {
    return num1 + num2;
}


// Pretty simple syntax if you learned C
function betterCaculate(num1, num2, operator) {
    console.log(operator);

    if (operator == "+") {
        return num1 + num2;
    }

    if (operator == "-") {
        return num1 - num2;
    }

    if (operator == "*") {
        return num1 * num2;
    }

    if (operator == "/") {
        return num1 / num2;
    }
}

const heading1 = document.querySelector("h1");

/*
var calculated = betterCaculate(10, 2, "*");
var introString = "Calculated: ";
heading1.textContent = introString.concat(calculated.toString());
*/

function congratulate() {
    heading1.textContent = "Congrats! Event will now commence (JK there is nothing)";
}


var countdownFrom = 10;
var currentCountdown = countdownFrom;

var interval = setInterval(function() {
    heading1.textContent = "Countdown: ".concat(currentCountdown.toString());

    if (currentCountdown <= 0) {
        clearInterval(interval);
        congratulate();
    }

    currentCountdown--;
}, 1000);
