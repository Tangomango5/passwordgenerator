// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that picks random variables for what the password will consist of
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

//Function that creates the random password and connect to the write password function
function generatePassword() {

  var userInput = window.prompt("how long would you like your password to be?")

  //parseInt turns strings into number values
  var passwordLength = parseInt(userInput)

  //Sends a message to the user that they did not enter any numbers
  if (isNaN(passwordLength)) {
    window.alert ("That's not a number!")
    return
  }

  //Gives an alert telling the viewer that they put an incorrect number
  if  (passwordLength < 8 || passwordLength > 128) {
    window.alert ("password must be between 8 and 128 characters.")
    return
  }

  //Variables that sends the messages to the user to pick what they would like in their password
  var userWantsNumbers = window.confirm("Would you like your password to include numbers?")
  var userWantsSymbols = window.confirm("Would you like your password to include symbols?")
  var userWantsLowercase = window.confirm("Would you like your password to include lowercase letters?")
  var userWantsUppercase = window.confirm("Would you like your password to include uppercase letters?")

//List of variables that will be in the password
  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


  var optionsCart = []

  //this is the function that increases the length of the password
  for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  //this is for if the user wants numbers
  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }
  
  //if the user wants symbols
  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }
  
  //if the user wants lowercase
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  //if the user wants uppercase
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  //if the user does not pick any options then it defaults to lowercase
  if (optionsCart.Length === 0) {
    optionsCart.push(lowercaseList)
  }

  //this is where the password will be generated
  var generatedPassword = ""

  //function for random characters
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem (optionsCart)
    var randomChar = getRandomItem (randomList)
    generatedPassword += randomChar
  }

  //this returns the function to the generated password variable to generate the password
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

