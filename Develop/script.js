var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"]


// PASSWORD GENERATOR QUESTIONS

  // LENGTH OPTION
  function generatePassword () {
    length = parseInt (window.prompt ("How many characters would you like your password to be? Please choose between 8 and 128."));
    if (length < 7 || length > 128) {
      alert("Not a valid response, refresh the page and try again!")
      }
    else {

  // LETTER CASE OPTION
    upperCase = confirm ("Do you want to include uppercase letters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (uppercase);

    lowerCase = confirm ("Do you want to include lowerrcase letters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (lowercase);

    // NUMBER OPTION
    numbers = confirm ("Do you want to include numbers? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (numbers)

    // SPECIAL CHARACTERS OPTION
    specialCharacters = confirm ("Do you want to include special characters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (special);
  };  

  // CONCATINATION 
  var possiblePasswordArray = []
  var passwordArray []

  if (upperCase) {
    possiblePasswordArray = possiblePasswordArray.concat (upperCase);
  }
  
  if (lowerCase) {
    possiblePasswordArray = possiblePasswordArray.concat (lowerCase);
  }

  if (numbers) {
    possiblePasswordArray = possiblePasswordArray.concat (numbers);
  }

  if (specialCharacters) {
    possiblePasswordArray = possiblePasswordArray.concat (specialCharacters)
  }


// Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);