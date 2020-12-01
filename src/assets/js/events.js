// Get the button by ID:
document.getElementById('hover-me').onmouseover = function(){
    console.log('You mouse over the button')
}

// To do the same stuff of document.getElementById but using a function:
function button_clicked(){
    alert('You clicked at button!')
}

// // To check if some key was down:
// document.onkeydown = function(){
//     alert('You keydown ' + event.keyCode)
// }
