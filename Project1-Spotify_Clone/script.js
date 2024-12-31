// importing songs json files;
import {arr} from './Song/Array.js';

// Play audio
let url = arr[0].url;
let song = new Audio(url);

let play_button = document.querySelectorAll(".playbutton");
let seekbar = document.getElementById("Seek");
play_button.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (song.paused) {
      song.play();
      play_button.forEach((elem) => {
        elem.classList.add("fa-pause");
        elem.classList.remove("fa-play");
      });
      document.getElementById("playtrack-img").style.animation =
        "rotation 10s linear infinite";
    } else {
      song.pause();
      play_button.forEach((elem) => {
        elem.classList.remove("fa-pause");
        elem.classList.add("fa-play");
      });
      document.getElementById("playtrack-img").style.animation = "none";
    }
  });

  // updating the seek bar
  song.addEventListener("timeupdate",()=>{
    let progress = parseInt(song.currentTime/song.duration*100);
    seekbar.value = progress;
    console.log(progress);
  })

  seekbar.addEventListener("change",()=>{
    song.currentTime = (seekbar.value*song.duration)/100;
  })

  // 
});
