
document.write("10" + 5);

document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    
}

function nan(){

document.getElementById("nantest").innerHTML = isNaN('This is a string.');
}

function number() {
document.getElementById("numbertest").innerHTML = isNaN('007');
}
function posinfinity() {
var pos = 2E310;
document.getElementById("pos").innerHTML = pos;
}

function neginfinity() {
var neg = -3E310;
document.getElementById("neg").innerHTML = neg;
}