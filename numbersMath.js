// Numbers and Math Notes
const num1 = 100;
const num2 = 50;

let val;

// addition
val = num1 + num2;
// multiplication
val = num1 * num2;
// subraction
val = num1 - num2;
// division
val = num1 / num2;
// modulus operater - what's left over. This would give us 0
val = num1 % num2;

// Math Object

// Gives us PI
val = Math.PI;
// Gives us Eulers Number
val = Math.E;
// Rounds the number normally. This would output 2
val = Math.round(2.4);
// Rounds up. This would give us 3
val = Math.ceil(2.4);
// Rounds down. This would give us 2
val = Math.floor(2.8);
// Square root
val = Math.sqrt(64);
// absolute number. This would give us 3
val = Math.abs(-3);
// Power. This will give us 8 to the power of 2, or 64
val = Math.pow(8, 2);
// Minimum number, this will give us -2
val = Math.min(2,33,4,1,55,6,3,-2);
// Max number - 55
val = Math.max(2,33,4,1,55,6,3,-2);
// Random decimal point. To get a random number we need to do some finagling
val = Math.random();

// How to get a random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1) //The +1 makes it so that you don't get 0