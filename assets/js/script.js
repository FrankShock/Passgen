// Assignment Code
var generateBtn = document.querySelector("#generate");
// VARIABLES
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passLength = "";
var PassPool = [];

// GET PASSWORD LENGTH
function generatePassword() {
    passLength = (prompt("How long will your password be, it must be between 8 to 128 characters?"));
  if (passLength < 8 != passLength > 128)
  passLength = (prompt("Please enter between 8 - 128 characters"));

 pickLOWER = confirm("Do you want to use lowercase characters?");
 pickUPPER = confirm("Do you want to use uppercase characters?");
 pickNumb = confirm("Do you want to use numbers?");
 pickSpec = confirm("Do you want to use special characters?");

// TO CONFIRM CHOICES
var userChoice = [];
if (pickLOWER) {
  userChoice = userChoice.concat(lowerChar)
}
if (pickUPPER) {
  userChoice = userChoice.concat(upperChar)
}
if (pickNumb) {
  userChoice = userChoice.concat(numberChar)
}
if (pickSpec) {
  userChoice = userChoice.concat(specChar)
}
 console.log(userChoice)
// MATH FOR PASSWORD
  var PassPool = ""
  for (var i = 0; i < passLength; i++) {
    PassPool = PassPool + userChoice[Math.floor(Math.random() * userChoice.length)];
    password = PassPool;
    }
    return PassPool;
  }   
 
// Function to write password to text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);