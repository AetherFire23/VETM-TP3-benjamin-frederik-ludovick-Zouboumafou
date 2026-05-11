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

// En tant que le joueur je veux consulter le shopHtml pour acheter des améliorations.
    //
    // En tant que le joueur je veux acheter des améliorations dans le shopHtml pour l’augmenter nombre de biscuits.
    //
    // En tant que le joueur je veux acheter le shopHtml pour gagner le jeu.

    buyUpgrade(upgrade: UpgradeBase): void {

    }

    getAvailableUpgrades(): UpgradeBase[] {
        return this._possibleUpgrades;
    }

    buyStore() {

    }
}