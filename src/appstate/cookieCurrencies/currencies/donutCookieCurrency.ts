import {CookieCurrencyBase} from "../cookieCurrencyBase.ts";

export class DonutCookieCurrency extends CookieCurrencyBase {

    constructor(initialMoney: number = 0) {
        super(initialMoney, "Donut");
    }
}