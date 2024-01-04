// Q1

alert('Lab 1');
var username = prompt("Enter your username");
var password = prompt("Enter your password");

if (username == "admin" && password == "421$$") {
    alert("Welcome login success");
}
else if (username != "admin" && password == "421$$") {
    alert("Username is incorrect");
}
else if (username == "admin" && password != "421$$") {
    alert("Password is incorrect");
}
else {
    alert("Username and Password are incorrect");
}


//Q2
alert('Lab 2');

var firstNumber = prompt("Enter first number");
var operation = prompt("Enter operation");
var secondNumber = prompt("Enter second number");

switch (operation) {
    case "sum":
        alert(Number(firstNumber) + Number(secondNumber));
        break;
    case "multi":
        alert(Number(firstNumber) * Number(secondNumber));
        break;
    case "subtract":
        alert(Number(firstNumber) - Number(secondNumber));
        break;
    case "division":
        alert(Number(firstNumber) / Number(secondNumber));
        break;
    case "moduls":
        alert(Number(firstNumber) % Number(secondNumber));
        break;
    default:
        alert("Invalid operation");
}

// Bonus 

alert('Bouns');
var firstNumber = prompt("Enter first number");
var operation = prompt("Enter operation");
var secondNumber = prompt("Enter second number");

var result = 0;
var flag = true;
operation = operation.toLowerCase();

while (flag) {
    switch (operation) {
        case "sum":
            result = Number(firstNumber) + Number(secondNumber);
            alert(result);
            break;
        case "multi":
            result = Number(firstNumber) * Number(secondNumber);
            alert(result);
            break;
        case "subtract":
            result = Number(firstNumber) - Number(secondNumber);
            alert(result);
            break;
        case "division":
            result = Number(firstNumber) / Number(secondNumber);
            alert(result);
            break;
        case "moduls":
            result = Number(firstNumber) % Number(secondNumber);
            alert(result);
            break;
        default:
            alert("Invalid operation");
    }

    firstNumber = result;
    operation = prompt("Enter operation");
    
    if (operation==null) {
        flag = false;
        break;
    }
    secondNumber = prompt("Enter second number");

    if (secondNumber==null) {
        flag = false;
        break;
    }
}