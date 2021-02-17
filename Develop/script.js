// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"


// Assignment code here



// Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);