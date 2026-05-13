import {StreakCalculator} from "./streakCalculator.ts";
import type {StreakObject} from "./streakCalculator.ts";

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
    const average = arrayOfClicks.reduce((a, b) => a + b, 0) / arrayOfClicks.length;
    console.log("Voici le average cps : " + average);

    //Removing the first element if the array is more than 2
    if (arrayOfClicks.length > 2) {
        arrayOfClicks.shift();
    }
}

function calculateStreaks(cps: number) {
    let currentStreak = StreakCalculator(cps)
    if(currentStreak != null) {
        currentStreakCookieSum += cps * currentStreak.streakMultiplier;
    }
}

function renderStreak(streakName : string, streakMultiplier: number, currentCookieSum : number) {

}

function onClick() {
    clicksThisSecond++;
}

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);
setInterval(onInterval, 1000);

