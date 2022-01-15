toss = () => {
  let audio = document.getElementById("audio");
  audio.play();

  setTimeout(() => {
    let result = Math.floor(Math.random() * 2);
    if (result == 0) document.getElementById("result").innerHTML = "Tails";
    else document.getElementById("result").innerHTML = "Heads";
  }, 1300);
};
