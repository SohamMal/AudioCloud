//audio array
var audio=[];
audio[4]=new Audio('brook_tone.mp3');
audio[1]=new Audio('Baby, You\'re A Rich Man.mp3');
audio[2]=new Audio('monkey_d_luffy.mp3');
audio[3]=new Audio('Night Changes.mp3');
audio[0]=new Audio('darsal.mp3');

//image array
var images=[];
images[4]='soul_king.png';
images[1]='Withthebeatlescover.jpg';
images[2]='Moneky_d_luffy.png';
images[3]='night_changes.jpg';
images[0]='Darasal.jpg';

//names array
var artists=[];
artists[4]="One-piece";
artists[1]="Beatles";
artists[2]="Luffy";
artists[3]="One-direction";
artists[0]="Raabta"

var songs=[];
songs[4]="Binks sake";
songs[1]="Baby you\'re rich man";
songs[2]="Monkey_d_luffy";
songs[3]="Night_changes";
songs[0]="Darsal";

var i=0;
//queue
var q=document.querySelector(".Queue");
var qvisible=false;
var queue_btn=document.querySelector('.queue-icon i');
 queue_btn.addEventListener("click", function(){
    if(!qvisible){
        document.querySelector(".Queue").style.display="block";
        qvisible=true;
    }
    else{
        document.querySelector(".Queue").style.display="none";
        qvisible=false;
    }
})
var now_playing_img=document.querySelector(".Now-playing-img");
var now_playing_text=document.querySelector(".Now-playing-text");
var q1img=document.querySelector(".q1img");
var q3img=document.querySelector(".q3img");
var q2img=document.querySelector(".q2img");
var q1text=document.querySelector(".q1text");
var q2text=document.querySelector(".q2text");
var q3text=document.querySelector(".q3text");
now_playing_img.src=images[i];
now_playing_text.innerText=songs[i];

function change_queue(){
    now_playing_img.src=images[i];
    now_playing_text.innerText=songs[i];
    var k=i;
    function condition_for_loop(){
        k++;
        if(k>=images.length){
            k=0;
        }
    }
    condition_for_loop()
    q1img.src=images[k];
    q1text.innerText=songs[k];
    condition_for_loop();
    q2img.src=images[k];
    q2text.innerText=songs[k];
    condition_for_loop();
    q3img.src=images[k];
    q3text.innerText=songs[k];
}

//play button
function play(){
    if(!isplay){
        play_btn.classList.remove('fa-play');
        play_btn.classList.add('fa-pause');
        audio[i].play();
        isplay=true;
    }
    else if(isplay){
        play_btn.classList.remove('fa-pause');
        play_btn.classList.add('fa-play');
        audio[i].pause();
        isplay=false;
    }
}
var play_btn=document.querySelector(".play-icon i");
var isplay=false;
play_btn.addEventListener("click", play)

//change album and names
var song_name_text=document.querySelector('.song-name-text');
var song_artist_text=document.querySelector('.song-artist-text');
var album_image=document.querySelector('.album-img');
var song_duratn_time=document.querySelector(".song-duration-time");
function change_album(){
    album_image.src=images[i];
    song_artist_text.textContent=artists[i];
    song_name_text.textContent=songs[i];
    audio[i].volume=current_volume;
}


//next function
function play_next(){
    audio[i].pause();
    i++;
    if(i>=audio.length){
        i=0;
    }
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
}

//previous function
function play_prev(){
    audio[i].pause();
    i--;
    if(i==-1){
        i=3;
    }
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
}


// Next button
var next_btn=document.querySelector('.play-next i');
next_btn.addEventListener("click", play_next);


//previous button
var prev_btn=document.querySelector('.fa-circle-chevron-left');
prev_btn.addEventListener("click", play_prev);


function tomin(x){
    var min=x/60;
    return Math.floor(min);
}
function tosec(x){
    var sec=x%60;
    return Math.floor(sec);
}

//slider
var slider=document.querySelector(".slider");
var played;
var song_crnt_time=document.querySelector(".song-current-time");
setInterval(function(){
    played=(100 * audio[i].currentTime / audio[i].duration);
    slider.addEventListener("click", function(){
        //change current time too
        audio[i].currentTime=(slider.value/100)*audio[i].duration;
        played=slider.value;
    })
    slider.value = played;
    var current_minutes=tomin(audio[i].currentTime);
    var current_secs=tosec(audio[i].currentTime);
    if(current_secs<10){
        song_crnt_time.innerText=current_minutes+ ":0"+current_secs;
    }
    else{
        song_crnt_time.innerText=current_minutes+ ":"+current_secs;
    }
    var duration_min=tomin(audio[i].duration);
    var duration_sec=tosec(audio[i].duration);
    if(duration_sec<10){
        song_duratn_time.innerText=duration_min+":0"+duration_sec;
    }
    else{
        song_duratn_time.innerText=duration_min+":"+duration_sec;
    }
    //autoplay next on completion
    if(played===100){
        play_next();
    }
}, 100);

//volume settings
var volumebtn=document.querySelector(".fa-volume-high");
var volume_slider=document.querySelector(".vol-slider");
var current_volume=1;
volume_slider.addEventListener("input", change_volume);
function change_volume(){
    current_volume = volume_slider.value / 100;
    audio[i].volume = current_volume;
}

//signin btn
var signinbtn=document.querySelector(".sign-in-btn");
signinbtn.addEventListener("click", function(){
    window.open("Signin.html", "_self");
})

//play buttons in main display
var binksake=document.querySelector(".binksake");
var urrichman=document.querySelector(".baby_ur");
var nightchng=document.querySelector(".night_changes");
var luffy_song=document.querySelector(".luffy");
binksake.addEventListener("click", function(){
    audio[i].pause();
    i=4;
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
});
urrichman.addEventListener("click", function(){
    audio[i].pause();
    i=1;
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
});
nightchng.addEventListener("click", function(){
    audio[i].pause();
    i=3;
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
});
luffy_song.addEventListener("click", function(){
    audio[i].pause();
    i=2;
    change_album();
    change_queue();
    audio[i].currentTime=0;
    if(isplay){
        audio[i].play();
    }
    else{
        audio[i].pause();
    }
});
// message greeting
var greeting=document.querySelector(".greeting");
var today=new Date();
var hours=today.getHours();
console.log(hours);
if(hours<12){
    greeting.innerText="Good Morning,";
}
else if(hours>=12 && hours<18){
    greeting.innerText="Good Afternoon,";
}
else if(hours>=18){
    greeting.innerText="Good Evening,";
}