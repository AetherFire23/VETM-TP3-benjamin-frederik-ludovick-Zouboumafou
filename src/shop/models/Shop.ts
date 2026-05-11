// @ts-ignore
import type {IUpgradeViewModel} from "./IUpgradeViewModel.ts";
import type {UpgradeBase} from "./upgrades/UpgradeBase.ts";
import {BetterClickUpgrade} from "./upgrades/betterClickUpgrade.ts";
import {AutoclickUpgrade} from "./upgrades/autoclickUpgrade.ts";


export class Shop {
    // TODO: Prendre en constucctor le player pis ses upgrades

    private _possibleUpgrades: UpgradeBase[] = [];

    constructor() {
        this._possibleUpgrades = [
            new BetterClickUpgrade(),
            new AutoclickUpgrade(),
        ];
    }


    buyUpgrade(upgradeName: string): void {
        const upgrade = this._possibleUpgrades.find(x => x.name === upgradeName)!;

        if (!upgradeName) {
            throw new DOMException("upgrade not found!")
        }

        upgrade.acquireUpgrade();
    }

    getAvailableUpgrades(): UpgradeBase[] {
        return this._possibleUpgrades;
    }

    buyStore() {

    }
}