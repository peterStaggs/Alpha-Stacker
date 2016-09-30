//1) Create an array with each letter of the alphabet as a string//
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
//2) Declare a variable with an empty string. This is will store the values to be printed//
var first = '';
//3) Declare a function that will iterate alphabet's length//
function stackLetters() {
for (var i = 0; i < alphabet.length; i++) {
//4) Include a space every 3 letters using modulo//
		if ((i + 1) % 3 === 0) {
			first += alphabet[i] + ' ';
			console.log(first);
		}
// 5) Include an else to print the remainder of the letters each iteration//
		else {
			first += alphabet[i];
			console.log(first);
		}
	}
}
// 6) Call the function//
stackLetters(alphabet);
