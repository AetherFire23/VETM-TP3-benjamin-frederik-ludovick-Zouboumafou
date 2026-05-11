import {CookieCurrencyBase} from "../cookieCurrencyBase.ts";

export class NormalCookieCurrency extends CookieCurrencyBase {
    constructor(initialMoney = 0) {
        super(initialMoney, "Normal");
    }
}