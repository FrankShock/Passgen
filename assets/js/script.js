// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var Number = "0123456789";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var character = "!@#$%^&*_-+=";



function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
}
// Else if for 3 positive options
 if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
}
if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
}
if (confirmCharacter && confirmLowercase && confirmUppercase) {
    
}
if (confirmNumber && confirmLowercase && confirmUppercase) {
    
}
// Else if for 2 positive options 
if (confirmCharacter && confirmNumber) {
   

} 
if (confirmCharacter && confirmLowercase) {
    

}
if (confirmCharacter && confirmUppercase) {
    
}
if (confirmLowercase && confirmNumber) {
    

} 
if (confirmLowercase && confirmUppercase) {
    

}
if (confirmNumber && confirmUppercase) {
    
}
// Else if for 1 positive option
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
