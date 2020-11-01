// #generate, is where the button is located in the html code, var generateBtn
// begins to define where our user goes once he clicks on the button.
// document.querySelector("#generate") pin points an ID using three steps, 
// which then allows us to definte var generate Btn. 
var generateBtn = document.querySelector("#generate");



// create password function "writePassword" by calling upon generatePassword()
// as defined in a var password. Then, we set var password, to the value in a
// another var called passwordText. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// in order for our button to work, we create a constant called Generate Button 
// then, add an event listener for a "click", whitewe can access the document, 
// get elementByID, then acess the e

const generateButton = document.getElementById("generateBtn")
generateBtn.addEventListener("click", writePassword)





// these prompts will gather information from the user through prompts
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
// so whatcha' whatcha' whatcha' want? 
  var numbers = confirm ("Do you want numbers in your password?");
  var upperCases = confirm ("Do you want uppercases in your password?");
  var lowerCases = confirm ("Do you want lowercases in your password?");
  var specialCharacters = confirm ("Do you want special characters in your password?");
    // if the user cancels out of everything, if the boolean is false,
    // then we have to tell the user it's not possible to create a password
    // and proceed to restart the site, hoping they change their 
    if (numbers === false && upperCases === false && lowerCases === false && specialCharacters === false){
     alert("Sorry we couldn't generate a password for you");
     generatePassword();
   }

  // /
  var minimumCount = 0;
  var minimumNumbers = 0;
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters ="";

// functions to generate random numbers 
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


// if statements that measures whether or not user clicked ok or cancel. then it includes the corresn
// corresponding information into a password
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
  var randomPasswordGenerated = "";

  // Loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength)); i++){
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }

  // To make sure characters are added to the password /4
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;

}