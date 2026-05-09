import type {CookieTypes} from "./currencies/cookieENum.ts";

export class CookieCurrencyBase {
    private _money: number;
    private readonly _name: CookieTypes;

    constructor(money: number, name: CookieTypes) {
        this._money = money;
        this._name = name;
    }

    incrementCurrency() {
        console.log(this._name + " just clicked.");
        this._money += 1;
    }

    get money(): number {
        return this._money;
    }

    get name(): CookieTypes {
        return this._name;
    }
}