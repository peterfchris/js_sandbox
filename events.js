// EVENTS NOTES

// Listeners & Event Obj
// document.querySelector('.clear-task').addEventListener('click', function(e){
//   console.log('Hello World')

//   e.preventDefault()
// })

// document.querySelector('.clear-task').addEventListener('click', onClick)

// function onClick(e){
//   let val

//   val = e
  
//   // Evnt target element
//   val = e.target
//   val = e.target.id
//   val = e.target.className
//   val = e.target.classList

//   // Event Type
//   val = e.type

//   // Timestamp
//   val = e.timeStamp

//   // Coords event relative to the window
//   val = e.clientY
//   val = e.clientX

//   // Coords event relative to the element
//   val = e.offsetY
//   val = e.offsetX

//   console.log(val)
// }

// MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card')
// const heading = document.querySelector('h5')

// // Click
// clearBtn.addEventListener('click', runEvent)
// // Doubleclick
// clearBtn.addEventListener('dblclick', runEvent)
// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent)
// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent)
// // Mouseenter
// card.addEventListener('mouseenter', runEvent)
// // Mouseleave
// card.addEventListener('mouseleave', runEvent)
// // Mouseover
// card.addEventListener('mouseover', runEvent)
// // Mouseout
// card.addEventListener('mouseout', runEvent)
// // Mousemove
// card.addEventListener('mousemove', runEvent)

// // Event handler
// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`)

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

  // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }


// Keyboard & Input Events
// const form = document.querySelector('form')
// const taskInput = document.getElementById('task')
// const heading = document.querySelector('h5')
// const select = document.querySelector('select')

// Clear Input
// taskInput.value = ''

// form.addEventListener('submit', runEvent)

// Keydown
// taskInput.addEventListener('keydown', runEvent)
// // Keyup
// taskInput.addEventListener('keyup', runEvent)
// // Keypress
// taskInput.addEventListener('keypress', runEvent)
// // Focus
// taskInput.addEventListener('focus', runEvent)
// // Blur
// taskInput.addEventListener('blur', runEvent)
// // Cut
// taskInput.addEventListener('cut', runEvent)
// // Paste
// taskInput.addEventListener('paste', runEvent)
// // Input
// taskInput.addEventListener('input', runEvent)
// // Change
// select.addEventListener('change', runEvent)

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`)

//   // console.log(e.target.value)

//   // heading.innerText = e.target.value

//   // // Get input value
//   // console.log(taskInput.value)

//   // e.preventDefault()
// }


// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title')
// })
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content')
// })
// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card')
// })
// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col')
// })

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)

// document.body.addEventListener('click'. deleteItem)

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item')
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item')
//     e.target.parentElement.parentElement.remove()
//   }
// }