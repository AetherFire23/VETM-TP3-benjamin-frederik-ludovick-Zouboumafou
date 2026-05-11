import {UpgradeBase} from "./UpgradeBase.ts";
import {NormalCookieCurrency} from "../../../appstate/cookieCurrencies/currencies/normalCookieCurrency.ts";

export class BetterClickUpgrade extends UpgradeBase {
    constructor() {
        super("better Clicking", new NormalCookieCurrency(10));
    }

    protected applyEffectOnBuy() {
        console.log("Ugprade better clicked bought!");
    }
}