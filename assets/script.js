// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that creates random values
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

//Function that connects the randomInt with the length
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

//Function that creates the random password
function generatePassword() {

  var userInput = window.prompt("how long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  //Sends a message to the user that they did not enter anything
  if (isNaN(passwordLength)) {
    window.alert ("That's not a number!")
    return
  }


  //Gives an alert telling the viewer that they put an incorrect number
  if  (passwordLength < 8 || passwordLength > 128) {
    window.alert ("password must be between 8 and 128 characters.")
    return
  }

  var userWantsNumbers = window.confirm("Would you like your password to include numbers?")
  var userWantsSymbols = window.confirm("Would you like your password to include symbols?")
  var userWantsLowercase = window.confirm("Would you like your password to include lowercase letters?")
  var userWantsUppercase = window.confirm("Would you like your password to include uppercase letters?")

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }
  
  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }
  
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  if (optionsCart.Length === 0) {
    optionsCart.push(lowercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem (optionsCart)
    var randomChar = getRandomItem (randomList)
    generatedPassword += randomChar
  }

  console.log(generatedPassword)
  return generatedPassword

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

