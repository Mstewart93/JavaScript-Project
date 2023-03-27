function Count_To_Ten() {
    var Digit = "" ;
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
function Length() {

let text = "Plants need enough sunlight and water to grow.";
let length = text.length; //this set length to the text length so the next step will be accurate.
document.getElementById("Length").innerHTML = length; //done this way it writes the variable lenght onto the browser
}

var Animals = ["Ruger", "Doc", "Hunter","Sassy","Charcoal","Ruby", "Cowboy"];
var Content = "";
var Y;
function Animal_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {
        Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_Of_Animal_Names").innerHTML = Content;
}

function pig_pics() {
    var Pig_Picture = [];
    Pig_Picture[0] = "rolling in the mud";
    Pig_Picture[1] = "eating in the field";
    Pig_Picture[2] = "feeding their piglets";
    Pig_Picture[3] = "sleeping in the mud";
    document.getElementById("Pig").innerHTML = "In this picture, the pig is " + 
        Pig_Picture[2] + ".";
}

function constant_function() {
    const Lotr = {type:"Hobbit", gender:"Male", name:"Biblo"};
    Lotr.name = "Pippin";
    Lotr.age = "111";
    document.getElementById("Constant").innerHTML = "I would like to introduce you to " + Lotr.name + " he is a " +
    Lotr.gender + ", he has a best friend Merry.";
}

function returnfunction() {
    return Math.PI;
}
//var X = 20; can be changed think character healh
//const X = 10; cant be changed think character height

// creating an object with different properties
let pig = {
    Breed: " Kune Kune",
    Gender: " Sow",
    Age: "6",
    Color: " Red",
    Description: function() {
        return "This pig is " + this.Age + " years old, and is a " + this.Color + this.Breed  + this.Gender + " .";
    }
};

document.getElementById("Pig_Object").innerHTML = pig.Description();


/*Learning the break and continue statement*/ 

for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    Text += "The number is " + i + "<br>";
}
document.getElementById("breakdance").innerHTML = Text;


//and it goes on and on continue statements, breaks but once the iteration is done continues 

for (let m = 0; m < 10; m++) {
    if (m === 3) {continue;}
    text += "The number is " + m + "<br>";
}
document.getElementById("lets go").innerHTML = text;