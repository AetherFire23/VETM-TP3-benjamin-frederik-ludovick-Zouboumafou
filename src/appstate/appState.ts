export class AppState {
    // @ts-ignore
    private money: number;

    constructor() {
        this.money = 0;
    }

    get getMoney() {
        return this.money;
    }

    set setMoney(num: number) {
        this.money = num;
    }
}

/*
EXPORT GLOBAL UTILISABLE PAR TOUT LE MONDE !@@ :)
 */
const monsieurState: AppState = new AppState();
export default monsieurState;