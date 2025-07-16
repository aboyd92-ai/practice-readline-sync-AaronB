const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name? ');
console.log(`\nhello ${name}! I have some questions for you.\n`);
const answer1 = readlineSync.question('What is a string in JavaScript? ');
const answer2 = readlineSync.question('What is the result of 2 + "2"? ');
const answer3 = readlineSync.question('What does typeof true return? ');
const answer4 = readlineSync.question('Enter a number to be doubled: ');
const answer5 = readlineSync.question('What is the type of NaN in JavaScript? ');

//Step 3
console.log(`\nThank you for your answers, ${name}!\n`);
console.log(`1. ${answer1}`);
console.log(`2. ${answer2}`);
console.log(`3. ${answer3}`);
console.log(`4. ${answer4}`);
console.log(`5. ${answer5}`);

