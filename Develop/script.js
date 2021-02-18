var upperCaseList = [ 
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var lowerCaseList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
 
var numbersList = ['0','1','2','3','4','5','6','7','8','9'];

var specialCharactersList = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];


// PASSWORD GENERATOR QUESTIONS

  // LENGTH OPTION
  function generatePassword () {
    length = parseInt (window.prompt ("How many characters would you like your password to be? Please choose between 8 and 128."));
    if (length < 7 || length > 128) {
      alert("Not a valid response, refresh the page and try again!")
      }
    else {

  // LETTER CASE OPTION
    var upperCase = confirm ("Do you want to include uppercase letters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (upperCase);

    var lowerCase = confirm ("Do you want to include lowerrcase letters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (lowerCase);

  // NUMBER OPTION
    var numbers = confirm ("Do you want to include numbers? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (numbers)

  // SPECIAL CHARACTERS OPTION
    var specialCharacters = confirm ("Do you want to include special characters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (specialCharacters);
  };  

  // CONCATINATION 
  var possiblePasswordArray = []

  if (upperCase) {
    possiblePasswordArray = possiblePasswordArray.concat (upperCaseList);
  }
  
  if (lowerCase) {
    possiblePasswordArray = possiblePasswordArray.concat (lowerCaseList);
  }

  if (numbers) {
    possiblePasswordArray = possiblePasswordArray.concat (numbersList);
  }

  if (specialCharacters) {
    possiblePasswordArray = possiblePasswordArray.concat (specialCharactersList)
  }

  // FOR LOOP
  var password = ""
  for (var i = 0; i < length; i++) {
    password += (possiblePasswordArray[Math.floor (Math.random() * possiblePasswordArray.length)]);
  };

  return password;
};


// PASSWORD TO THE #password INPUT
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// GET REFERENCE O THE #generate ELEMENT
var generateBtn = document.querySelector("#generate");

// EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);