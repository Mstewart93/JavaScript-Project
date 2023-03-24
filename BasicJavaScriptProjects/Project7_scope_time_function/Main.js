//Global variable example//
var x = 10; // this is assigned outside of the function//
function global_Variable_1() {
    document.write(20 + x + "<br>");
// 
}

function global_Variable_2() {
    document.write(x + 100);
}
global_Variable_1();
global_Variable_2();

document.write("<br>")

//local variable//

function local_Variable_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function local_Variable_2() {
    document.write(X + 100);
}
local_Variable_1();
local_Variable_2();
// this all only displays 30 because is was in the first function but not inside the 2nd one//



function Error_Debug_1() {
    var X = 10;
    console.log(15 + X);
}
function Error_Debug_2() {
    console.log(X + 100);
}
Error_Debug_1();
Error_Debug_2();

//using the console log enables you to use developer tools//
//to figure out what is going on and why you have an error//


//if statement Practice//
// This gets the hour in millitary time, and if before 6 pm//
//the phrase will show//

function Date_Function() {
    if (new Date().getHours() < 18) {
    document.getElementById("Date").innerHTML = "How are you today?";
    }
}

//My if statement try//
function Happy_Function() {
    var dog = 2;
    if (dog > 1) {
    document.getElementById("Happy").innerHTML = "You are happy!";
    }
}

//else statements Practice//

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
document.getElementById("How_old_are_you?").innerHTML = Vote;
}


//My else statement try//

function Chicken_Function() {
    Chicken = document.getElementById("Chicken").value;
    if (Chicken >= 1) {
        Egg = "You have eggs!";

    }
    else {
        Egg = "You do not have eggs :(";
    }
    document.getElementById("How_many_eggs").innerHTML = Egg;
}

//else if practice//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
