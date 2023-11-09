// alert("Start play!");

<<<<<<< HEAD
let tom1 = new Audio('./sounds/tom-1.mp3');


document.querySelector(".w").addEventListener("keydown", function () {
    // let tom1 = new Audio('./sounds/tom-1.mp3');
    alert("Start play!");
    tom1.play();
}); 
document.querySelector(".a").addEventListener("keydown", function () {
  alert("Start play!");
});
document.querySelector(".s").addEventListener("keydown", function () {
  alert("Start play!");
});
document.querySelector(".d").addEventListener("keydown", function () {
  alert("Start play!");
});
document.querySelector(".j").addEventListener("keydown", function () {
  alert("Start play!");
});
document.querySelector(".k").addEventListener("keydown", function () {
  alert("Start play!");
});
document.querySelector(".l").addEventListener("keydown", function () {
  alert("Start play!");
});
=======
let numberOfDrums = document.querySelectorAll(".drum").length;
// let tom1 = new Audio('./sounds/tom-1.mp3');

for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
      case "l":
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      default:
        console.log(this.innerHTML);
        break;
    }
  });
}

document.addEventListener("keydown", (event) => {
    makeSound(event.key);

    buttonAnimation(event.key);
 
});
 function makeSound(key){
    switch(key){
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
 }


 buttonAnimation = (pressedKey) => {

    let thePressedKey = document.querySelector("."+pressedKey);
    thePressedKey.classList.add("pressed");

    setTimeout(() => {
        thePressedKey.classList.remove("pressed")
    }, 100);
 
}
>>>>>>> new-branch
