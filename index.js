for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    audioPlayer(this.textContent);
  });
}
document.addEventListener("keydown", function (e) {
  audioPlayer(e.key);
});

function audioPlayer(press) {
  switch (press) {
    case "w":
      playAudio("tom-1");

      break;
    case "a":
      playAudio("tom-2");
      break;
    case "s":
      playAudio("tom-3");
      break;
    case "d":
      playAudio("tom-4");
      break;
    case "j":
      playAudio("crash");
      break;
    case "k":
      playAudio("kick-bass");
      break;
    case "l":
      playAudio("snare");
      break;
  }
  activeKey(press);
}

function playAudio(str) {
  var audio = new Audio(`sounds/${str}.mp3`);
  audio.play();
}

function activeKey(key) {
  document.querySelector(`.${key}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${key}`).classList.remove("pressed");
  }, 300);
}
