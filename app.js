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
const name = 'John Doe'
// Number
const age = 45
// Boolean
const hasKids = true
// Null
const car = null
// Undefined
let test;
// Symbol
const sym = Symbol()

// Reference Types
// Array
const hobbies = ['movies', 'music']
// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date()
console.log('today', today)
console.log(typeof today)