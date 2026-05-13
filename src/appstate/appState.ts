import type {CookieTypes} from "./cookieCurrencies/currencies/cookieENum.ts";
import {type CookieCurrencyBase} from "./cookieCurrencies/cookieCurrencyBase.ts";
import {DonutCookieCurrency} from "./cookieCurrencies/currencies/donutCookieCurrency.ts";
import {NormalCookieCurrency} from "./cookieCurrencies/currencies/normalCookieCurrency.ts";
import {HealthPoint} from "./cookieCurrencies/currencies/HealthPoint.ts";

export class AppState {
    // @ts-ignore
    private _methods: (() => void)[];
    private _cookieCurrencies: CookieCurrencyBase[] = [];
    private _currentCookie: CookieCurrencyBase;

    constructor() {
        this._methods = [];
        this._cookieCurrencies = [new DonutCookieCurrency(), new NormalCookieCurrency(), new HealthPoint(69)]
        this._currentCookie = this._cookieCurrencies[0];
    }

    swapCookieByName(cookieType: CookieTypes) {
        const cookieFound = this._cookieCurrencies.find(x => x.name === cookieType)!;

        if (cookieFound !== undefined) {
            this._currentCookie = cookieFound;
        }
    }

    increaseMoney() {
        this._currentCookie.incrementCurrency();
        this.notify();
    }


    get cookieCurrencies(): CookieCurrencyBase[] {
        return this._cookieCurrencies;
    }
    addSpecificAmountOfCookies(amount: number) {
        const cookiesObject = this._currentCookie = this._cookieCurrencies.find(x=> x.name === "Normal")!;
        cookiesObject.money+= amount;
        this.notify();
    }

    get cookieMoney(): number {
        return this._currentCookie.money;
    }

    public attach(refreshMethod: () => void) {
        this._methods.push(refreshMethod);
    }

    public notify() {
        for (let method of this._methods) {
            method();
        }
    }
}

/*
EXPORT GLOBAL UTILISABLE PAR TOUT LE MONDE !@@ :)
 */
const appState: AppState = new AppState();
export default appState;