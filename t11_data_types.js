// THIS IS NOT A BLOCK COMMENT
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

console.log("JavaScript is running");
console.log("LAlalalalalalalal");

/*******************************************
 MAIN CODE
 *******************************************/

var Currentyear = 1943;

const OUTPUT = document.getElementById("JavaScriptOutput");
let userName = "hello";
let userAge = "hello";
let userDollar = "hello";

OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>Also added by JavaScript</p>";
OUTPUT.innerHTML += "<p>Did I mention this was added by JavaScript</p>";
OUTPUT.innerHTML += "<p>Yeah this is definitely JavaScript</p>";
OUTPUT.innerHTML += "<img src='Lemon_John.jpg' alt='John Lemon'>";

writeLine();



/*******************************************
 FUNCTIONS
 *******************************************/

function writeLine() {
  OUTPUT.innerHTML += "<p>Meet The Beatles</p>";
}

function start() {
  var answer = Currentyear - Userage;
  OUTPUT.innerHTML += "<p>You are " + answer + " years old</p>";
}



function getFormInput() {
const NAME_FIELD = document.getElementById("Namefield");
const AGE_FIELD = document.getElementById("Agefield");
const DOLLAR_FIELD = document.getElementById("Dollarfield");
userName= NAME_FIELD.value;
userAge= AGE_FIELD.value;
userDollar= DOLLAR_FIELD.value;
OUTPUT.innerHTML += "<p>Welcome to the website " + userName + "</p>";   


}