import {CookieCurrencyBase} from "../cookieCurrencyBase.ts";

export class HealthPoint extends CookieCurrencyBase {

    constructor(initialMoney: number = 0) {
        super(initialMoney, "Oignon");
    }

    incrementCurrency() {
        console.log(this._name + " just clicked.");
        this._money -= 1;
        if (this._money===0){
            alert("you loose !!!! \n\n" +
                "losser")
        }
    }
}