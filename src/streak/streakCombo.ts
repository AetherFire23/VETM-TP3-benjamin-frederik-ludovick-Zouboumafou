let clicksThisSecond: number = 0;
let arrayOfClicks: number[] = [];

function onInterval() {
    arrayOfClicks.push(clicksThisSecond);
    clicksThisSecond = 0;
    console.log();
    const average = arrayOfClicks.reduce((a, b) => a + b, 0) / arrayOfClicks.length;
    console.log("Voici le average cps : " + average);

    //Removing the first element if the array is more than 3
    if (arrayOfClicks.length > 3) {
        arrayOfClicks.shift();
    }
}

function onClick() {
    clicksThisSecond++;
}

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);
setInterval(onInterval, 1000);

