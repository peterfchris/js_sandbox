// Log to console
// console.log('hello world')
// console.log('123', 123)
// console.log('true', true)
// var greeting = 'hello';
// console.log('greeting', greeting)
// console.log('array', [1,2,3,4])
// console.log('object', {a:1, b:2})
// console.table({a:1, b:2})

// console.error('This is some error', 'This is some error')
// console.clear()
// console.warn('this is a warning')
// console.time('hello')
// console.timeEnd('hello')

// Variables - var, let, const
// var name = 'john doe'
// console.log(name)
// name = 'steve smith'
// console.log(name)

// // variable names can only have letters, numbers, _, $
// // cannot start with number

// // init var
// var greeting
// console.log('greeting', greeting)

// // Multi word vars
// var firstName = 'john' //camel case
// var first_name = 'sara' //underscore or snake case
// var FirstName = 'tom' // Pascal case
// var firstname //don't use

// LET
// let name = 'john doe'
// console.log(name)
// name = 'steve smith'
// console.log(name)

// CONST
// cannot reassign
// have to assign a value
// You can manipulate it if it's an obj or arr, but you can't reassign the variable itself
// const name = 'john'
// console.log('name', name)

// Primitive Types

// String
// const name = 'John Doe'
// // Number
// const age = 45
// // Boolean
// const hasKids = true
// // Null
// const car = null
// // Undefined
// let test;
// // Symbol
// const sym = Symbol()

// // Reference Types
// // Array
// const hobbies = ['movies', 'music']
// // Object Literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date()
// console.log('today', today)
// console.log(typeof today)

// let val;

// // Number to string

// val = String(555);
// val = String(4+4);
// //Bool to String
// val = String(true)
// // Date to string
// val=String(new Date())
// // Array to string
// val=String([1,2,3])

// // toString()
// val = (5).toString()
// val=(true).toString()

// // String to number
// val = Number('5')
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val = Number('hello')
// val = Number([1,2,3])

// val = parseInt('100')
// val = parseFloat('100.30')


// // Output
// // console.log(val)
// // console.log(typeof val)
// // // console.log(val.length)
// // console.log(val.toFixed(2))

// const val1 = String(5)
// const val2 = 6
// const sum = Number(val1 + val2)

// console.log(sum)
// console.log(typeof sum)


// Numbers and Math Notes
// const num1 = 100;
// const num2 = 50;

// let val;

// // addition
// val = num1 + num2;
// // multiplication
// val = num1 * num2;
// // subraction
// val = num1 - num2;
// // division
// val = num1 / num2;
// // modulus operater - what's left over. This would give us 0
// val = num1 % num2;

// // Math Object

// // Gives us PI
// val = Math.PI;
// // Gives us Eulers Number
// val = Math.E;
// // Rounds the number normally. This would output 2
// val = Math.round(2.4);
// // Rounds up. This would give us 3
// val = Math.ceil(2.4);
// // Rounds down. This would give us 2
// val = Math.floor(2.8);
// // Square root
// val = Math.sqrt(64);
// // absolute number. This would give us 3
// val = Math.abs(-3);
// // Power. This will give us 8 to the power of 2, or 64
// val = Math.pow(8, 2);
// // Minimum number, this will give us -2
// val = Math.min(2,33,4,1,55,6,3,-2);
// // Max number - 55
// val = Math.max(2,33,4,1,55,6,3,-2);
// // Random decimal point. To get a random number we need to do some finagling
// val = Math.random();

// // How to get a random number between 1 and 20
// val = Math.floor(Math.random() * 20 + 1) //The +1 makes it so that you don't get 0


// String Methods & Concatenation Notes

// const firstName = 'William'
// const lastName = 'Johnson'
// const age = 36
// const str = 'Hello there my name is Brad'
// const tags = 'web design,web development,programming'

// let val;

// // will return 'WilliamJohnson'
// val = firstName + lastName

// // Concatenation
// val = firstName + ' ' + lastName

// // Append
// val = 'Brad '
// // This will return 'Brad Traversy'
// val += 'Traversy'

// val = 'Hello, my name is ' + firstName + ' and I am ' + age

// // Escaping
// val = 'That\'s awesome, I can\'t wait'

// // Length
// val = firstName.length

// // concat()
// val = firstName.concat(' ', lastName)

// // Change case
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// // square brackets give the character at index 2, in this case, 'l'
// val = firstName[2]

// // indexOf()
// // This will start from the beginning, and stop when it finds the first one, in this case 2
// val = firstName.indexOf('l')
// // This will start from the end and stop when it finds the last time that char appears, in this case, 3
// val = firstName.lastIndexOf('l')

// // charAt()
// // This is the opposite of indexOf. Instead of giving you the index of a char it will give you the char of an index
// val = firstName.charAt('2')
// // Get last char
// val = firstName.charAt(firstName.length - 1)

// // substring()
// // This will give you the first 4 char of the str: 'Will'
// val = firstName.substring(0,4)

// // slice()
// // usually used for arrays but can also be used for strings
// // outputs first 4 char
// val = firstName.slice(0,4)
// // will give you last 3 char
// val = firstName.slice(-3)

// // split()
// val = str.split(' ')
// val = tags.split(',')

// // replace()
// val = str.replace('Brad', 'Jack')

// // includes()
// val = str.includes('Will')

// console.log(val)


// Template Literals Notes
 