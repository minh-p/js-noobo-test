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
var introString = "Calculated: ";
var numToBeMultiplied = 3;

heading1.textContent = "How";

// Doing this later lol not working.
/*
int i;
for (i = 0; i < 10; i++) {
    var calculated = betterCaculate(numToBeMultiplied, 10, "*");
    heading1.textContent = introString.concat(calculated.toString());
    wait(1);
}
*/
