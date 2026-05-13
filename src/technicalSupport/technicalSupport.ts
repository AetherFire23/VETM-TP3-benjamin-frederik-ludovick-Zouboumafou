document.getElementById("help-button")!.addEventListener("click", onClick)
document.getElementById("technical-support-close")!.addEventListener("click", onClose)

function onClick(){
    document.getElementById("technical-support-modal")!.style.visibility = "visible";

    let technicalSupportSong = document.getElementById("technical-support-audio") as HTMLAudioElement;
    let gameThemeSong = document.getElementById("game-theme-song") as HTMLAudioElement;
    gameThemeSong.muted = true
    technicalSupportSong.muted = false;
    technicalSupportSong.autoplay = true;
}

function onClose(){
    document.getElementById("technical-support-modal")!.style.visibility = "hidden";

    let technicalSupportSong = document.getElementById("technical-support-audio") as HTMLAudioElement;
    let gameThemeSong = document.getElementById("game-theme-song") as HTMLAudioElement;
    gameThemeSong.muted = false;
    technicalSupportSong.muted = true;
}