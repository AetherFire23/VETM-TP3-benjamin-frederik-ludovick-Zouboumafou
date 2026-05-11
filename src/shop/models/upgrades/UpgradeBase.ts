import {type CookieCurrencyBase} from "../../../appstate/cookieCurrencies/cookieCurrencyBase.ts";

export class UpgradeBase {
    private _name: string;
    private _currencyPrice: CookieCurrencyBase;
    private _isAcquired: boolean;

    constructor(name: string, cookieCurrency: CookieCurrencyBase) {
        this._name = name;
        this._isAcquired = false;
        this._currencyPrice = cookieCurrency;
    }

    acquireUpgrade() {
        this._isAcquired = true;
    }

    private applyEffectOnClick() {
    }

    protected applyEffectOnBuy() {

    }


    get currencyPrice(): CookieCurrencyBase {
        return this._currencyPrice;
    }

    get name(): string {
        return this._name;
    }

    get isAcquired(): boolean {
        return this._isAcquired;
    }
}