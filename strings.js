// String Methods & Concatenation Notes

const firstName = 'William'
const lastName = 'Johnson'
const age = 36
const str = 'Hello there my name is Brad'
const tags = 'web design,web development,programming'

let val;

// will return 'WilliamJohnson'
val = firstName + lastName

// Concatenation
val = firstName + ' ' + lastName

// Append
val = 'Brad '
// This will return 'Brad Traversy'
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and I am ' + age

// Escaping
val = 'That\'s awesome, I can\'t wait'

// Length
val = firstName.length

// concat()
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

// square brackets give the character at index 2, in this case, 'l'
val = firstName[2]

// indexOf()
// This will start from the beginning, and stop when it finds the first one, in this case 2
val = firstName.indexOf('l')
// This will start from the end and stop when it finds the last time that char appears, in this case, 3
val = firstName.lastIndexOf('l')

// charAt()
// This is the opposite of indexOf. Instead of giving you the index of a char it will give you the char of an index
val = firstName.charAt('2')
// Get last char
val = firstName.charAt(firstName.length - 1)

// substring()
// This will give you the first 4 char of the str: 'Will'
val = firstName.substring(0,4)

// slice()
// usually used for arrays but can also be used for strings
// outputs first 4 char
val = firstName.slice(0,4)
// will give you last 3 char
val = firstName.slice(-3)

// split()
val = str.split(' ')
val = tags.split(',')

// replace()
val = str.replace('Brad', 'Jack')

// includes()
val = str.includes('Will')

console.log(val)