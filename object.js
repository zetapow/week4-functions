// String Methods

console.log('HELLO WORLD'.toLowerCase());
console.log('can anyone hear me?'.toUpperCase());
console.log('   Wasted spaces either side of the string     '.trim());

const daString = 'Hello';
console.log(daString.toUpperCase());
/*
let userMessage = prompt('Enter your message').trim();

if (userMessage.length <= 10) {
   alert(userMessage.toUpperCase());
} else {
   alert(userMessage.toLowerCase());
}
*/

let userMessage = prompt('Enter a message').trim();
trimmedMessage = userMessage;

if (!trimmedMessage) {
   alert('Please write something');
} else if (trimmedMessage.length <= 10) {
   alert(trimmedMessage.toUpperCase());
} else {
   alert(trimmedMessage.toLowerCase());
}

/* 
String.split()

Take pattern and divides string into ordered list of substrings by searth for pattern, put substring into array and return array
*/

const string = 'The quick brown fox jumps over the lazy dog.';

console.log(string.split(' '));
console.log(string.split(''));
console.log(string.split('o'));
