import {StreakCalculator} from "./streakCalculator.ts";
import appState from "../appstate/appState.ts";

let clicksThisSecond: number = 0;
let arrayOfClicks: number[] = [];
let currentStreakCookieSum: number = 0;

/***
 This script calculate the current streak based on cps.
 If the streaks is at 9 cps you get 1.1x cookies
 If the streaks is at 10 cps tou get 1.2x cookies
 If the streaks is at 10.5 cps you get 1.3
 ***/

function onInterval() {
    arrayOfClicks.push(clicksThisSecond);
    clicksThisSecond = 0;
    const cps = arrayOfClicks.reduce((a, b) => a + b, 0) / arrayOfClicks.length;
    console.log("Voici le average cps : " + cps);
    handleStreaks(cps)
    //Removing the first element if the array is more than 3
    if (arrayOfClicks.length > 3) {
        arrayOfClicks.shift();
    }
}
/**
 * This function handle the currents streaks, it increments the number of cookie for the current streaks and
 * if there is no streaks it hide the container of cookies and put it to 0 and adds the cooki to the app state
 * */
function handleStreaks(cps: number) {
    const currentStreak = StreakCalculator(cps)
    if (currentStreak != null) {
        currentStreakCookieSum += Math.round(cps * currentStreak.streakMultiplier);
        renderStreak(currentStreak.streakName, currentStreak.streakMultiplier, currentStreakCookieSum, cps)
    }else {
        hideStreaks()
        appState.addSpecificAmountOfCookies(Math.round(currentStreakCookieSum))
        currentStreakCookieSum = 0;
    }
}

function renderStreak(streakName: string, streakMultiplier: number, currentCookieSum: number, cps : number) {
    document.getElementById("streak-name")!.innerHTML = streakName;
    document.getElementById("streak-multiplier")!.innerHTML = streakMultiplier.toString();
    document.getElementById("streak-cookies-sum")!.innerHTML = currentCookieSum.toString();
    document.getElementById("click-per-second")!.innerHTML = cps.toFixed(2);
    document.getElementById("streak-container")!.style.visibility = "visible";
}

function hideStreaks() {
    document.getElementById("streak-container")!.style.visibility = "hidden";
}

function onClick() {
    clicksThisSecond++;
}

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);
setInterval(onInterval, 1000);

