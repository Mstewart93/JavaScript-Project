function Full_Sentence() {
    var part_1 = "Congratulations!";
    var part_2 = "  You have";
    var part_3 = " reached a";
    var part_4 = " check point.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
/* Slice Practice*/ 

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); /*The numbers indicate which 
    characters in your string will be cut out and displayed. This code would display “Johnny.”*/
    document.getElementById("Slice").innerHTML = Section;
}

/* Slice try*/

function piece_meal() {
    var portion = "Which came first the Chicken or the egg";
    var Section = portion.slice(36,39);
    document.getElementById("piece").innerHTML = Section;
}

/*touppercase */
var test = "This is a test sentence!"; /*set a varialble*/
var uppercase = test.toUpperCase(); /*set the uppercase to a variable to print*/
document.write(uppercase);/*printt to page*/

/*search the text for a position*/
var text = "I have one million chickens.";
position = text.search("one");
document.write(position);


/*number function*/
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

/* Precision Function*/

function precision_Method() {
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

/*to fixed */

var num = 5.678954
var n = num.toFixed(3);
document.write(n);

/*value of */

var texttest = "This is a pig";
result = texttest.valueOf();
document.write(result);

/* */

/* */