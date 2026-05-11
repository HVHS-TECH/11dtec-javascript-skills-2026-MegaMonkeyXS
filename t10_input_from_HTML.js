// THIS IS NOT A BLOCK COMMENT
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

console.log("JavaScript is running");
console.log("LAlalalalalalalal");

/*******************************************
 MAIN CODE
 *******************************************/

var Userage = 463674329137270;
var Currentyear = 1943;

const OUTPUT = document.getElementById("JavaScriptOutput");
const NAME_FIELD = document.getElementById("Namefield");
let userName = NAME_FIELD.value;


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

OUTPUT.innerHTML += "<p>Welcome to the website " + userName + "</p>";    
}