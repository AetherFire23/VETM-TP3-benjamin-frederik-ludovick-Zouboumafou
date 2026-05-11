let clicksThisSecond: number = 0;
setTimeout(onInterval, 350);

document.addEventListener("click", onClick);
function onInterval() {
    console.log("interval")
}
function onClick() {
    console.log("onCLick")
}

