// Class 22: loops for and for/in

// The loop for:
for(var a = 0; a < 5; a++){
    console.log(a)
}

// Using loop for to use at an array:
var students = ['Peter', 'Marie', 'Joseph']
for(var b = 0; b < students.length; b++){
    console.log(students[b])
}

// Using loop for/in to use at an object:
var cars = {
    'year': 2020,
    'model': 'Fox',
    'fuel': 'Gasoline'
}
for(var prop in cars){
    console.log(prop +':' + cars[prop])
}

// Using getElementsByClassName:
var elements = document.getElementsByClassName("example");
for(var c = 0; c < elements.length; c++){
    elements[c].innerHTML = "This is the div number "+c
    elements[c].style.color = 'orange';
    elements[c].style['font-weight'] = 'bold';
}