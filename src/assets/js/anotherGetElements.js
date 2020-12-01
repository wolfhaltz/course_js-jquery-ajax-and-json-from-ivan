// Class 18: another getElement methods

//getElementsByClassName
var example_getElementsByClassName = document.getElementsByClassName("example_getElementsByClassName");

// Added some text at those divs:
example_getElementsByClassName[0].innerHTML = "This is the first div. It have 50px height."
example_getElementsByClassName[1].innerHTML = "This is the secont div. And it's purple!"
example_getElementsByClassName[2].innerHTML = "This is the last div. And it have just a text."

// Put some style at this example getElementsByClassName:
example_getElementsByClassName[0].style.height = "50px"
example_getElementsByClassName[1].style['background-color'] = "purple"
example_getElementsByClassName[1].style['color'] = "white"


// getElementsByTagName
var example_getElementsByTagName = document.getElementsByTagName("p");
console.log(example_getElementsByTagName)