var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrumButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
});

}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}