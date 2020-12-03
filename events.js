// EVENTS NOTES

// Listeners & Event Obj
// document.querySelector('.clear-task').addEventListener('click', function(e){
//   console.log('Hello World')

//   e.preventDefault()
// })

document.querySelector('.clear-task').addEventListener('click', onClick)

function onClick(e){
  let val

  val = e
  
  // Evnt target element
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  // Event Type
  val = e.type

  // Timestamp
  val = e.timeStamp

  // Coords event relative to the window
  val = e.clientY
  val = e.clientX

  // Coords event relative to the element
  val = e.offsetY
  val = e.offsetX

  console.log(val)
}