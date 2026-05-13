import {UpgradeBase} from "./UpgradeBase.ts";
import {NormalCookieCurrency} from "../../../appstate/cookieCurrencies/currencies/normalCookieCurrency.ts";
import appState from "../../../appstate/appState.ts";

export class BetterClickUpgrade extends UpgradeBase {
    constructor() {
        super("better Clicking", new NormalCookieCurrency(10));
    }


    applyEffectOnClick() {
    }


    /*
        Ui logic in models
     */
    protected applyEffectOnBuy() {
        console.log("Ugprade better clicked bought!");

        document.getElementById("cookie-button")!.addEventListener("click", () => {
            appState.increaseMoney();
            appState.increaseMoney();
            appState.increaseMoney();
        })
    }
}