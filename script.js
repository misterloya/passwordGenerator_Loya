// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters for the function created


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

const generateButton = document.getElementById("generateBtn")
generateBtn.addEventListener("click", writePassword)





// Prompts that come up after you click generate password
function generatePassword(){
  var passwordLength = prompt ("Please enter the number of characters you want for your new password. It must be more than 8 but less than 128");
  
  if (isNaN(passwordLength) === true){
    alert("Please input a number, not a word");
    generatePassword();
  }
  
  else if (passwordLength > 128){
    alert("Your Password is too Long, it needs to be under 128 characters");
    generatePassword();
  }    

  else if (passwordLength < 8){
    alert("Your password needs to be longer than 8 and shorter than 128");
    generatePassword();
} 

  var numbers = confirm ("Do you want numbers in your password?");
  var upperCases = confirm ("Do you want uppercases in your password?");
  var lowerCases = confirm ("Do you want lowercases in your password?");
  var specialCharacters = confirm ("Do you want special characters in your password?");
    
    if (numbers === false && upperCases === false && lowerCases === false && specialCharacters === false){
     alert("Sorry we couldn't generate a password for you");
     generatePassword();
   }

  // This is a minimum count for numbers, lowerCases, upperCases and specialCharacters 
  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases and specialCharacters

  var minimumNumbers;
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters ="";

  // Generator functions**
  var functionArray = {
    getNumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function(){
      return String.fromCharCode(Math.floor(Math.random() * 33 + 47));
    }
  };

  // Checks to make sure user selected ok for all and uses empty minimums from above



  if (numbers === true){
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true){
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (upperCases === true){
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (specialCharacters === true){
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
  

  // Empty string variable for the loop below
  var randomPasswordGenerated = [];

  // Loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength)); i++){
    var randomNumberPicked = Math.floor(Math.random() * passwordLength);
    randomPasswordGenerated += randomNumberPicked;
  }

  // To make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;

}