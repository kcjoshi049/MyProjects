import {playlists} from './Song/Array.js';

function add_song(src,name,artists,duration,id){
    let elem = document.createElement("div");
    elem.className = "card";
    elem.id = id;
    if(duration.min<10){
        duration.min = `0${duration.min}`;
    }
    if(duration.sec<10){
        duration.sec = `0${duration.sec}`;
    }
    elem.innerHTML = `
            <img
              src=${src};
            />
            <div class="dis">
              <h4>${name}</h4>
              <h6>${artists.male}${artists.female}</h6>
            </div>
            <div class="time">
            <i class="fa-solid fa-play playbutton"></i>
            <h5>${duration.min}:${duration.sec}</h5>
            </div>`;
    document.querySelector(".playlist").append(elem);
}

function Add_playlist(li_name,li_author,li_img,id){
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

for(const i of playlists){
    let x = i.description;
    Add_playlist(x.playlistName,x.author,x.img_url,x.id);
}

// Event handling on playlists
// Eventlistener for Liked playlist

document.getElementById("Liked").addEventListener("click",()=>{
    document.getElementById("Liked").style.backgroundColor = "rgb(103 87 87 / 64%)";
    
    playlists[0].songs.forEach((elem)=>{
        add_song(elem.img_url,elem.name,elem.singers,elem.duration,elem.id);
    })
});

// Eventlistener for arijit singh playlist

document.getElementById("Arijit").addEventListener("click",()=>{

})

