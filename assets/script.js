// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
  var passwordLength = 8;
  var password = "";

  for (var i = 0; i<= passwordLength; i++) {
    var randomNumber = math.floor(Math.random() * Chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
