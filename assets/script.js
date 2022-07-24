// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLength = 8
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charLowercase = "abcdefghijklmnopqrstuvwxyz"
var charSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

