var upperCase = [ 
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

var lowerCase = [
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
 
var numbers = ['0','1','2','3','4','5','6','7','8','9']

var specialCharacters = ['!','#','$','%','&','(',')','*','+',',','-','./:;','<','=','>','?','@','[',']','^','_','`','{','|','}','~']


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
      console.log (upperCase);

    lowerCase = confirm ("Do you want to include lowerrcase letters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (lowerCase);

  // NUMBER OPTION
    numbers = confirm ("Do you want to include numbers? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (numbers)

  // SPECIAL CHARACTERS OPTION
    specialCharacters = confirm ("Do you want to include special characters? Please select OK for 'Yes' or Cancel for 'No'")
      console.log (specialCharacters);
  };  

  // CONCATINATION 
  var possiblePasswordArray = []
  var passwordArray = []

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

  // FOR LOOP
  var password = ""

  for (var i = 0; i < length; i++) {
  password += (possiblePasswordArray[Math.floor (Math.random() * possiblePasswordArray.length)]);
    console.log (passwordArray);
  };

  return password;
};


// PASSWORD TO THE #password INPUT
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);