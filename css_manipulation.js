// CSS Manipulation
document.getElementById('btn_color').onclick = function(){

    document.getElementById('btn_color').style.height = "100px"
    document.getElementById('btn_color').style['background-color'] = "purple"
    document.getElementById('btn_color').style['color'] = "white"
    document.getElementById('btn_color').style.transform = "translateX(100px)"

}