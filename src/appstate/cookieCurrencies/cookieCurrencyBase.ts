import type {CookieTypes} from "./currencies/cookieENum.ts";

export class CookieCurrencyBase {
    public _money: number;
    public readonly _name: CookieTypes;

    constructor(money: number, name: CookieTypes) {
        this._money = money;
        this._name = name;
    }

    incrementCurrency() {
        console.log(this._name + " just clicked.");
        this._money += 1;
        if (this._money % 1000 > 0 && this._money % 1000 < 3 && this._money > 4) {
            if (confirm("Yon won the game\ndo tou want to continue ?") == false) {
                location.reload();
            }
        }
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }

    get name(): CookieTypes {
        return this._name;
    }
}