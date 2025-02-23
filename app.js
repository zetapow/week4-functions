/* 
function funcName(arg1, arg2, functionBOdy) {
   Do something
}
*/

function soLong() {
   console.log('So long, farewell');
   console.log('Auf Wiedersen, good night');
}

soLong();

function greet(firstName, lastName) {
   console.log(`Hello, ${firstName} ${lastName[0]}.`.toUpperCase());
}

greet('Dank', 'Memes');

/*
function repeat(string, numTimes) {
   let result = '';
   for (let i = 0; i < numTimes; i++) {
      result += string;
   }
   console.log(result);
}

repeat('I must not make any mistakes ', 5);

function isSnakeEyes(die1, die2) {
   if (die1 === 1 && die2 === 1) {
      return 'snake eyes!';
   } else {
      return 'not snake eyes';
   }
}
*/
function add(x, y) {
   return x + y;
}

let addNines = add(add(4, 5), add(6, 3));
console.log(addNines);

// Exercise 1
function showMyBrekkie(food1, food2) {
   return `I had ${food1} and ${food2} for breakfast`;
   // console.log(`I had ${food1} and ${food2} for my breakfast`);
}
let myBreakfast = showMyBrekkie('sugar', 'spice');
console.log(myBreakfast);

// Exercise 2
function emptyString(string) {
   // return str === '' ? true : false;
   if (string.length === 0) {
      return true;
   } else {
      return false;
   }

   // simplest solution return string ==='';
}
const checkString = emptyString('   ');
console.log(checkString);

// Exercise 3-1
function halfNumber(number) {
   return number / 2; //halved number scoped inside function
   // console.log(`Half of ${number} is ${halvedNumber}`); //once function returns, it exits
}
const OgNumber = 234;

const halvedNumber = halfNumber(OgNumber);
console.log(`Half of ${OgNumber} is ${halvedNumber}`);

// Exercise 3-2
function timeInSeconds(minutes) {
   return minutes * 60;
}

const minutes = parseInt(prompt('Enter the number of minutes'));
if (!isNaN(minutes)) {
   const totalSeconds = timeInSeconds(minutes);
   alert(`${minutes} is ${totalSeconds} in seconds`);
   console.log(`${minutes} minutes is ${totalSeconds} in seconds`);
} else {
   console.log('Please enter a valid number');
}
