export class AppState {
    // @ts-ignore
    private _cookieMoney: number; //cookie money
    private methods: (() => void)[];

    constructor() {
        this._cookieMoney = 0;
        this.methods = [];
    }


    get cookieMoney(): number {
        return this._cookieMoney;
    }

    set cookieMoney(value: number) {
        this._cookieMoney = value;
        this.notify();
    }

    public attach(refreshMethod: () => void) {
        this.methods.push(refreshMethod);
    }

    public notify() {
        for (let method of this.methods) {
            method();
        }
    }
}

/*
EXPORT GLOBAL UTILISABLE PAR TOUT LE MONDE !@@ :)
 */
const appState: AppState = new AppState();
export default appState;