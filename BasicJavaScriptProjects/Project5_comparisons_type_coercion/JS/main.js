document.write(10 < 2);
// False//
document.write("<br>");
document.write(2 < 10);
//True//
document.write("<br>");
document.write("10" + 5);
// 105//
document.write("<br>");
document.write(10==10);
//true//
document.write("<br>");
document.write(10==15);
//False//
document.write("<br>");
// Bellow are conditional Operations//
document.write(10>2 && 10>5);
//  True//
document.write("<br>");
document.write(10<2 && 10>5);
// False//
document.write("<br>");
document.write( 10<2 || 10 < 20);
//True//
document.write("<br>");
document.write(10<2 || 10 < 5);
//False//
document.write("<br>");
X = 12;
Y = 23;
Z = 12;
L = "12";
M = "13";

document.write(X===Y);
//False//
document.write("<br>");
document.write(X==Z);
//True//
document.write("<br>");
document.write(X===L);
//False//
document.write("<br>");
document.write(L==M);
//False//
document.write("<br>");

document.write(typeof 3);
//number//

function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//not operator that shows true//
function falsenot_function() {
    document.getElementById("no").innerHTML = !(5 > 10);
}
//not operator that shows false//

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

console.log(2+2);