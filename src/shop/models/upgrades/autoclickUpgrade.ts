import {UpgradeBase} from "./UpgradeBase.ts";
import {DonutCookieCurrency} from "../../../appstate/cookieCurrencies/currencies/donutCookieCurrency.ts";

export class AutoclickUpgrade extends UpgradeBase {
    constructor() {
        super("auto click", new DonutCookieCurrency(10));
    }


    protected applyEffectOnBuy() {
        console.log("Ugprade autolcikc bought!");
    }
}