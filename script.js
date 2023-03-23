// Assignment Code
var generateBtn = document.querySelector("#generate");

//Asking for password length, to include uppercase or lowercase, include numeric, and/or special characters. Generating password
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?:(Has to be be between 8 and 128 characters)");
  while (passwordLength < 8 || passwordLength > 128) { //If they add a number under or over the requirment it will loop the prompt again
    passwordLength = prompt("Please enter a length between 8 and 128 characters.");
  }
  //Asking for the characters
  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");
  //These are the libraries for the password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var confirmedChars = "";
  //Adds the selected characters in the empty screen
  if (lowercase) {
    confirmedChars += lowercaseChars;
  }
  if (uppercase) {
    confirmedChars += uppercaseChars;
  }
  if (numeric) {
    confirmedChars += numericChars;
  }
  if (special) {
    confirmedChars += specialChars;
  }
  //Generates a password randomly after answering what you want from each library
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * confirmedChars.length);
    password += confirmedChars.charAt(random);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
