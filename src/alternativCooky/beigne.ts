document.addEventListener("DOMContentLoaded", () => {
    setInterval(changement, 10000)

})


function changement() {
    console.log("beigne")
    document.getElementById("cookie-button")!.className = "beigne-style";
    setTimeout(back, 1000)
}

function back() {
    console.log("cookie")
    document.getElementById("cookie-button")!.className = "cookie-style";

}