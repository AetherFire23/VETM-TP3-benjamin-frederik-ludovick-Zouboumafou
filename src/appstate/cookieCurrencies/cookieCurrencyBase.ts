export class CookieCurrencyBase {
    private _money: number;
    private readonly _name: string;

    constructor(money: number, name: string) {
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

    get name(): string {
        return this._name;
    }
}