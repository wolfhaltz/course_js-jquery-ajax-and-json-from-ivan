// CSS Manipulation

document.getElementById('btn_color').onclick = function(){
    // The element with id 'btn_color' is the same as 'this':
    this.style.height = "100px"
    this.style['background-color'] = "purple"
    this.style['color'] = "white"
    this.style.transform = "translateX(100px)"
}