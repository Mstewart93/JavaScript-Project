function addition_function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; 
}

function sub() {
    var subtraction = 5 - 2;
    document.getElementById("SUB").innerHTML = "5 -2 = " + subtraction;
}

function multiplication() {
    var multi = 7 * 8;
    document.getElementById("multi").innerHTML = "7 * 8 = " + multi;
}

function divide() {
    var divide = 48 / 8;
    document.getElementById("divide").innerHTML = "48 / 8 = " + divide;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("More").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals  " + simple_Math;
}

function modulus_Operator() {
    var mod = 25 % 6;
    document.getElementById("modulusmath").innerHTML = "When you divide 25 by 6 you have a remainder of: " + mod;
}

function negation_Operator() {
    var X = 10;
    document.getElementById("neg").innerHTML = -X;
}

var X = 5;
X++;
document.write(X)

var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random() * 100);