// FUNCTIONS Notes

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName
}

console.log(greet())

// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x
}

console.log(square())

IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

(function(name){
  console.log('Hello ' + name);
})('Brad');

const todo = {
  add: function(){
    console.log('Add todo...')
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo...')
}

todo.add()
todo.edit(22)
todo.delete()