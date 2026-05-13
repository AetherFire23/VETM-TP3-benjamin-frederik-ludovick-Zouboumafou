import type {CookieTypes} from "./cookieCurrencies/currencies/cookieENum.ts";
import type {CookieCurrencyBase} from "./cookieCurrencies/cookieCurrencyBase.ts";
import {DonutCookieCurrency} from "./cookieCurrencies/currencies/donutCookieCurrency.ts";
import {NormalCookieCurrency} from "./cookieCurrencies/currencies/normalCookieCurrency.ts";

export class AppState {
    // @ts-ignore
    private _methods: (() => void)[];
    private _cookies: CookieCurrencyBase[] = [];
    private _currentCookie: CookieCurrencyBase;

    constructor() {
        this._methods = [];
        this._cookies = [new DonutCookieCurrency(), new NormalCookieCurrency()]
        this._currentCookie = this._cookies.find(x=> x.name === "Normal")!;
    }

    swapCookieByName(cookieType: CookieTypes) {
        const cookieFound = this._cookies.find(x => x.name === cookieType);

        if (cookieFound !== undefined) {
            this._currentCookie = cookieFound;
        }
    }

    increaseMoney() {
        this._currentCookie.incrementCurrency();
        this.notify();
    }

    addSpecificAmountOfCookies(amount: number) {
        const cookiesObject = this._currentCookie = this._cookies.find(x=> x.name === "Normal")!;
        cookiesObject.money+= amount;
    }

    get currentCookieMoney(): number {
        return this._currentCookie.money;
    }

    get cookieMoney(): number {
        let cookie = this._cookies.find(x=> x.name === "Normal")!;
        return cookie.money
    }

    get donutDoughMoney(): number {
        let cookie = this._cookies.find(x=> x.name === "Donut")!;
        return cookie.money
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