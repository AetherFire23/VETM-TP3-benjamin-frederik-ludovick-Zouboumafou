// @ts-ignore
import type {IUpgradeViewModel} from "./IUpgradeViewModel.ts";

export class Shop {
    // TODO: Prendre en constucctor le player pis ses upgrades
    constructor() {
    }

// En tant que le joueur je veux consulter le shopHtml pour acheter des améliorations.
    //
    // En tant que le joueur je veux acheter des améliorations dans le shopHtml pour l’augmenter nombre de biscuits.
    //
    // En tant que le joueur je veux acheter le shopHtml pour gagner le jeu.
    getAvailableUpgrades(): IUpgradeViewModel[] {
        return [
            {
                name: "DatUpgrade",
                price: 12,
                availability: "NotEnoughFundsToBuy",
                isBuyable: true
            },
            {
                name: "DatUpgrade2",
                price: 69,
                availability: "HasFundsButNotOwned",
                isBuyable: true
            },
        ];
    }

    buyStore() {

    }
}