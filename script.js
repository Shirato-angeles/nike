var col = document.getElementsByClassName("col");
var preview = document.getElementsBy("preview");
var nike = document.getElementsByClassName("nike");
var active = document.getElementsByClassName("active");


var Color = new Array(
    "./shoes_webpage_img/nike-b.png",
    "./shoes_webpage_img/nike-s.png",
    "./shoes_webpage_img/nike.png",
    "./shoes_webpage_img/nike-g.png"
);

for(let i = 0; i<nike.length; i++){
    nike[i].onclick = () =>{
        active.src = Color[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        tjis.className += " active"
    }
}