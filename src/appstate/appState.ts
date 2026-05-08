export class AppState {
    // @ts-ignore
    private money: number;
    private methods: (() => void)[];

    constructor() {
        this.money = 0;
        this.methods = [];
    }

    get getMoney() {
        return this.money;
    }

    set setMoney(num: number) {
        this.money = num;
        this.notify()
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
const monsieurState: AppState = new AppState();
export default monsieurState;