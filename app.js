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

const funcWithParamsExpression = function (num1, num2) {
   return num1 + num2;
};

console.log(funcWithParamsExpression(22, 33));

// Exercise 1

/*
function showMyBrekkie(food1, food2) {
   return `I had ${food1} and ${food2} for breakfast`;
}
console.log(showMyBrekkie('sugar', 'spice'));

function showFood(...food) {
   return `I had ${food} for breakfast`;
}

let foods = ['Yoghurt', 'Muesli', 'Coffee'];
myBreakfast = showMyBrekkie(...foods); // function only accepts 2 arguments
console.log(myBreakfast);

*/

function showMyFood(...foods) {
   if (foods.length === 0) {
      return 'I did not eat breakfast';
   } else if (foods.length === 1) {
      return `I had ${foods[0]} for breakfast`;
   } else {
      const allFood = foods.slice(0, -1).join(', ');
      const lastFood = foods[foods.length - 1];
      return `I had ${allFood} and ${lastFood} for breakfast`;
   }
}

console.log(showMyFood('salami', 'KFC', 'Pizza Hut'));
console.log(showMyFood());
console.log(showMyFood('Weet Bix'));
/*
foods = ['bacon', 'lettuce', 'tomato', 'egg'];
myBreakfast = showMyFood(...foods); // need to remove rest param when testing single string
console.log(myBreakfast);
*/
// Exercise 2
function emptyString(string) {
   return string === '' ? true : false;

   // solution 3
   // return !string
}
console.log(emptyString('   ')); // Should return false
console.log(emptyString('')); // Should return true
/*
function emptyString(string) {
   return string === '' ? true : false;
   // if (string.length === 0) {
   //    return true;
   // } else {
   //    return false;
   // }

   // simple solution return string ==='';
   // return string === '';
}
*/
// Exercise 3-1

//halved number scoped inside function
// console.log(`Half of ${number} is ${halvedNumber}`); //once function returns, it exits

function halfNumber(number) {
   return number / 2;
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
   // alert(`${minutes} is ${totalSeconds} in seconds`);
   console.log(`${minutes} minutes is ${totalSeconds} in seconds`);
} else {
   console.log('Please enter a valid number');
}

/* Function inside object = method 

const person = {
   greet: function (name) {
      return `Hello ${name}`;
   },
};

console.log(person.greet('Jimbo'));
*/
