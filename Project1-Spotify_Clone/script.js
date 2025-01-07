import { playlists } from "./Song/Array.js";

function add_song(src, name, artists, duration, id) {
  let elem = document.createElement("div");
  elem.className = "card";
  elem.id = id;
  function minutecheck(x) {
    if (x.min < 10) {
      return `0${x.min}`;
    }
    return x.min;
  }
  function secondCheck(x) {
    if (x.sec < 10) {
      return `0${x.sec}`;
    }
    return x.sec;
  }
  elem.innerHTML = `
            <img
              src=${src}
            />
            <div class="dis">
              <h4>${name}</h4>
              <h6>${artists.male}${artists.female}</h6>
            </div>
            <div class="time">
            <i class="fa-solid fa-play"></i>
            <h5>${minutecheck(duration)}:${secondCheck(duration)}</h5>
            </div>`;
  document.querySelector(".playlist").append(elem);
}

function Add_playlist(li_name, li_author, li_img, id) {
  let elem = document.createElement("div");
  elem.className = "list-items";
  elem.id = id;
  elem.innerHTML = `
            <img src=${li_img} />
            <div class="list-name">
              <h4>${li_name}</h4>
              <h5>by - ${li_author}</h5>
            </div>`;
  document.querySelector(".playlist_0").append(elem);
}

for (const i of playlists) {
  let x = i.description;
  Add_playlist(x.playlistName, x.author, x.img_url, x.id);
}

// Event handling on playlists
// Eventlistener for Liked playlist
function addingSong(num) {
  // function to add songs
  playlists[num].songs.forEach((elem) => {
    add_song(
      elem.img_url,
      elem.name,
      elem.singers,
      elem.duration,
      elem.id,
      elem.url
    );
  });
}
function removingSong(num) {
  // function to remove songs
  playlists[num].songs.forEach((elem) => {
    let x = document.getElementById(elem.id);
    x.remove();
  });
}
let currentSelectedId = null;
document.querySelector(".playlist_0").addEventListener("click", (event) => {
  if (event.target.classList.contains("list-items")) {
    let other_items = document.querySelectorAll(".list-items");
    other_items.forEach((elem) => {
      elem.style.backgroundColor = "rgba(0, 0, 0, 0.636)";
    });
    event.target.style.backgroundColor = "rgb(103 87 87 / 64%)";
    if (currentSelectedId === event.target.id) {
      return;
    }
    currentSelectedId = event.target.id;
    switch (event.target.id) {
      case "Liked":
        {
          document.getElementById("heart").classList.replace("fa-regular","fa-solid");
          document.getElementById("heart").style.color = "red";
          addingSong(0);
          removingSong(1);
        }
        break;
      case "Arijit":
        {
          document.getElementById("heart").classList.replace("fa-solid","fa-regular");
          document.getElementById("heart").style.color = "white";
          addingSong(1);
          removingSong(0);
        }
        break;
    }
  }
});
let currentSong = null;
let currentUrl = null;
let currentTarget = null; // this will handle the play button of the previous selected song //
let play_btn = document.getElementById("playbutton");
// handling songs from here
document.querySelector(".playlist").addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.style.backgroundColor = "rgba(0, 0, 0, 0.421)";
    });

    // changing track details//

    document.getElementById("playtrack-img").src =
      event.target.firstElementChild.src;
    document.getElementById("marquee").textContent =
      event.target.children[1].firstElementChild.textContent;
    document.getElementById("artists_name").textContent =
      event.target.children[1].lastElementChild.textContent;
    //
    event.target.style.backgroundColor = "black";

    //

    let url = event.target.id;

    if (currentUrl === url) {
      return;
    }
    if (currentSong) {
      currentSong.pause();
      currentSong.currentTime = 0;
      play_btn.classList.replace("fa-pause","fa-play");
      // play button of targeted element
      if (currentTarget) {
        currentTarget.classList.replace("fa-pause", "fa-play");
        currentTarget.onclick = null; // Remove the previous handler
      }
      document.getElementById("playtrack-img").style.animation = "none";
      //
    }
    // function to update the play buttons and track disk
    function updateButtons() {
      if (currentSong.paused) {
        currentSong.play();
        document.getElementById("playtrack-img").style.animation =
          "rotation 10s linear infinite";
        play_btn.classList.replace("fa-play","fa-pause");
        // play button of targeted element
        event.target.lastElementChild.firstElementChild.classList.replace("fa-play","fa-pause");
        //
      } else {
        currentSong.pause();
        play_btn.classList.replace("fa-pause","fa-play");
        // play button of targeted element
        event.target.lastElementChild.firstElementChild.classList.replace("fa-pause","fa-play");
        //
        document.getElementById("playtrack-img").style.animation = "none";
      }
    }
    // update play buttons and track disk ends here
    currentSong = new Audio(url);
    currentUrl = url;
    let seekbar = document.getElementById("Seek");
    currentTarget = event.target.lastElementChild.firstElementChild;
    
    play_btn.onclick = () => {updateButtons()}; // updatebuttons function calls here //
    event.target.lastElementChild.firstElementChild.onclick = () =>{updateButtons()}; // updatebuttons functions will not calls here // 

    // updating the seek bar
    // setting time section
    let timeFormat = (time) => {
      // this function will convert our time into second and minute
      let min = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      let sec = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${min}:${sec}`;
    };
    currentSong.addEventListener("loadedmetadata", () => {
      document.querySelector(".s2").textContent = timeFormat(
        currentSong.duration
      );
      seekbar.value = 0;
    });
    //
    currentSong.addEventListener("timeupdate", () => {
      document.querySelector(".s1").textContent = timeFormat(
        currentSong.currentTime
      );
      let progress = parseInt(
        (currentSong.currentTime / currentSong.duration) * 100
      );
      seekbar.value = progress;
      console.log(progress);
      console.log(currentSong.currentTime);
      if (progress == 100) {
        play_btn.classList.add("fa-play");
        play_btn.classList.remove("fa-pause");
        event.target.lastElementChild.firstElementChild.classList.add(
          "fa-play"
        );
        event.target.lastElementChild.firstElementChild.classList.remove(
          "fa-pause"
        );
      }
    });
    seekbar.addEventListener("change", () => {
      currentSong.currentTime = (seekbar.value * currentSong.duration) / 100;
    });
  }
});
// From here our song will be play
// Play audio
