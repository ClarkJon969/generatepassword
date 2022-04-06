
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var randomPassword = [];
  var usableCharacters = lowercaseChar;
  function getpasswordLength () {
    var passwordLength = prompt("Select a Password Length Between 8 and 128 Characters");
  return passwordLength
  }
  var passwordLength = getpasswordLength()
    if(passwordLength > 7 && passwordLength < 129){
      console.log('true')
    } else {
      console.log('false');
      alert('password length needs to be a number');
      generatePassword();
    }
    alert('By default password is lowercase')
    var uppercaseCheck = confirm("Do you want uppercase characters?")
    var numberCheck = confirm("Do you want numbers?")
    var specialCheck = confirm("Do you want special characters?")
  

    if(uppercaseCheck){
      usableCharacters += uppercaseChar
    }
    
    if(numberCheck){
      usableCharacters += numberChar
    }
    
     if(specialCheck) {
      usableCharacters += specialChar
    }
  var usableCharactersArray = usableCharacters.split("");

  for (let index = 0; index < passwordLength; index++) {
    var randomIndex = Math.floor(Math.random() * usableCharactersArray.length)  
   
    const randomCharacter = usableCharactersArray[randomIndex];
   randomPassword.push(randomCharacter);
  }
  
  
  return randomPassword.join("");
}


generateBtn.addEventListener("click", writePassword);

// const passwordNumberLength = document.getElementById ('passwordNumberLength')
// const useUppercaseEvent = document.getElementById ('useUppercase')
// const useLowercaseEvent = document.getElementById ('useLowercase')
// const useNumbersEvent = document.getElementById ('useNumbers')
// const useSymbolsEvent = document.getElementById ('useSymbols')
// const form = document.getElementById('prompts')

// passwordNumberLength.addEventListener('input', setPasswordLength)

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const passwordNumberLength = setPasswordLength.value
//   const useUppercase = useUppercaseEvent.checked
//   const useLowercase = useLowercaseEvent.checked
//   const useNumbers = useNumbersEvent.checked
//   const useSymbols = useSymbolsEvent.checked
//   const password = generatePassword(passwordNumberLength, useUppercase, useLowercase, useNumbers, useSymbols )
// })

// function generatePassword(passwordNumberLength, useUppercase, useLowercase, useNumbers, useSymbols) {

// }
