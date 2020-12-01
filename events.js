// Get the buttons by ID:
document.getElementById('click-me').onclick = function(){
    console.log('Click me button!')
    alert('You clicked at this button!')
}
document.getElementById('hover-me').onmouseover = function(){
    alert('You mouse over the button')
}
document.getElementById('leave-me').onmouseout = function(){
    alert('You mouse out the button')
}
document.onkeydown = function(){
    alert('You keydown '+ event.keyCode)
}