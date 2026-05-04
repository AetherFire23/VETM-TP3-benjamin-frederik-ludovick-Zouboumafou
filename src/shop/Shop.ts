// @ts-ignore
import type {IUpgrade} from "./IUpgrade.ts";

export class Shop {
    // TODO: Prendre en constucctor le player pis ses upgrades
    constructor() {
    }

// En tant que le joueur je veux consulter le shop pour acheter des améliorations.
    //
    // En tant que le joueur je veux acheter des améliorations dans le shop pour l’augmenter nombre de biscuits.
    //
    // En tant que le joueur je veux acheter le shop pour gagner le jeu.
    getAvailableUpgrades(): IUpgrade[] {
        return [
            {name: "Upgrade", price: 12}
        ];
    }

    buyStore() {

    }
}