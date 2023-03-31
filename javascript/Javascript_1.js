function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx= c.getcontext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.Pi);
ctx.stroke();