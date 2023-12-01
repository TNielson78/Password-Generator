// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()+=-~_<>,.?/:;*-";
var passwordChar = "";
function generatePassword() {

	console.log("Button was clicked!!!!")


	// 1.Prompt the user for the password criteria
	function passwordOptions() {
		var passwordLength = parseInt(prompt("Select the length of password between 8-128 Characters"))


		if (passwordLength < 8) {
			alert("password must contain more than 8 characters!");
			return
		}
		if (passwordLength > 128) {
			alert("Password must not contain more than 128 Characters!");
			return
		}
		if (isNaN(passwordLength)){
			alert("Must be a number");
			return
		}
		var lowercaseCharChoice = confirm("Do you want to include lowercase characters?");
		if (lowercaseCharChoice) {
			passwordChar += lowercaseChar;
		}
		var uppercaseCharChoice = confirm("Do you want to include uppercase characters?");
		if (uppercaseCharChoice) {
			passwordChar += uppercaseChar;
		}
		var numericalCharChoice = confirm("Do you want to include number characters?");
		if (numericalCharChoice) {
			passwordChar += numericalChar;
		}
		var specialCharChoice = confirm("Do you want to include special characters?");
		if (specialCharChoice) {
			passwordChar += specialChar;
		}
		if (!lowercaseCharChoice && !uppercaseCharChoice && !numericalCharChoice && !specialCharChoice) {
			alert("You must chose at least one character type!")
			return
		}
		console.log(passwordChar)
		return {passwordChar,passwordLength}
	}
	var allCharacters = passwordOptions()
	console.log(allCharacters)
	// display the generated password on page.
	function getRandomCharacters(string, length){
		var result ="";
		for (var i = 0; i <length; i++){
			var randomIndex = Math.floor(Math.random() * string.length);
			result += string[randomIndex];
		}
		return result
	}
	var password = getRandomCharacters(allCharacters.passwordChar, allCharacters.passwordLength)
	return password;
}
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
	console.log("show password")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













