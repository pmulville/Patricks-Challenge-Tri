// Assignment code
var generatePassword=document.getElementById("password")
var generateBtn = document.querySelector("#generate");
// defining variables
var chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()ABCDEFGHIJKLMONPQRSTUVWXYZ"
var passwordLegth = 15
var password = ""
var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");      var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var keyLegnth = confirm("Password must be between 8 and 128 characters! Click OK to continue");
//generate pasword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOP";
var passwordLegth = 15;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);
for (var i = 0; i<= passwordLegth; i++){
  var randomnumber = Math.floor(Math.random() * chars.length); password += chars.substring(randomnumber, randomnumber +1);
  document.getElementById("password").value = password;}