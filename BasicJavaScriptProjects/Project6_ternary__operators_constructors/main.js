function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short!":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
} // This will display if you are tall enough, the 52 sets the number that height needs to be more than. //

function Age_Function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = can_vote + " to vote";
}
// This does the same with age//


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1973, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a  " + Erik.Vehicle_Color + "-colored  " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//This will display what Erik drives//

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}