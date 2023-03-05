function My_First_Function() { // this makes it possible to match the HTML to make the button.// 
    var str = "This is the button text"; //not sure what this does yet//
    document.getElementById(Button_Text).innerHTML - str; //this makes it possible to match the HTML to make the button//
} //the .innerHTML modifies the content of an HTML Element.//

function myFunction() {
    var sentence = "I am Learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}