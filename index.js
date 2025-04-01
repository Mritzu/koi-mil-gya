var numberOfDrumButtons = document.querySelectorAll(".oo").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".oo")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var milgya1 = new Audio("sounds/milgya1.mp3");
      milgya1.play();
      break;

    case "a":
      var milgya2 = new Audio("sounds/milgya2.mp3");
      milgya2.play();
      break;

    case "s":
      var milgya3 = new Audio('sounds/milgya3.mp3');
      milgya3.play();
      break;

    case "d":
      var milgya4 = new Audio('sounds/milgya4.mp3');
      milgya4.play();
      break;

    case "j":
      var milgya5 = new Audio('sounds/milgya5.mp3');
      milgya5.play();
      break;

    case "k":
      var milgya6 = new Audio('sounds/milgya6.mp3');
      milgya6.play();
      break;

    case "l":
      var milgya7 = new Audio('sounds/milgya7.mp3');
      milgya7.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
