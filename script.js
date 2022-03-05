// Assignment code here
var password = {
  value: "",
  length: 128,
  charSet: "",
  charSetIs: false,
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: " !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  lengthPrompt: function () {
    var lengthPrompt = window.prompt(
      "How long do you want your password to be? Pick between 8 to 128 characters"
    );
    if (
      parseInt(lengthPrompt) < 8 ||
      parseInt(lengthPrompt) > 128 ||
      lengthPrompt === ""
    ) {
      window.alert("Please pick a number between 8 and 128");
      return password.lengthPrompt();
    } else {
      password.length = Math.floor(parseInt(lengthPrompt));
    }
  },
  lowercasePrompt: function () {
    var lowercasePrompt = window.confirm(
      "Would you like lowercase letters in your password?"
    );
    if (lowercasePrompt) {
      password.charSet = password.lowercase;
      password.charSetIs = true;
    }
  },
  uppercasePrompt: function () {
    var uppercasePrompt = window.confirm(
      "Would you like uppercase letters in your password?"
    );
    if (uppercasePrompt) {
      password.charSet += password.uppercase;
    }
  },
  numericPrompt: function () {
    var numericPrompt = window.confirm(
      "Would you like numerals in your password?"
    );
    if (numericPrompt) {
      password.charSet += password.numeric;
    }
  },
  specialPrompt: function () {
    var specialPrompt = window.confirm(
      "Would you like special characters in your password?"
    );
    if (specialPrompt) {
      password.charSet += password.special;
    }
  },
};

var generatePassword = function () {
  password.value = "";
  password.charSet = "";

  password.lengthPrompt();
  password.lowercasePrompt();
  password.uppercasePrompt();
  password.numericPrompt();
  password.specialPrompt();

  if (password.charSetIs) {
    for (var i = 0; i <= password.length; i++) {
      var randomNumber = Math.floor(Math.random() * password.charSet.length);
      password.value += password.charSet.substring(
        randomNumber,
        randomNumber + 1
      );
    }
    console.log(password.value);
    return password.value;
  } else {
    password.value = "";
    window.alert("Please pick at least one character type.");
    generatePassword();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
