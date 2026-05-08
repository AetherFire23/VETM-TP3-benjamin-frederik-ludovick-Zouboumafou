import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgradeViewModel} from "../models/IUpgradeViewModel.ts";
import type {BoughtTypes} from "../models/BoughtTypesEnum.ts";

const shop: Shop = new Shop();

rerenderUpgradeList()

function rerenderUpgradeList() {
    const shopList = document.getElementById("shop-list")!;

    const upgrades = shop.getAvailableUpgrades().map(createUpgradeElement);

    for (let upgrade of upgrades) {
        shopList.append(upgrade);
    }
}

function createUpgradeElement(upgrade: IUpgradeViewModel) {
    function onUpgradeClick() {
        console.log(upgrade);
    }

    const upgradeLi = document.createElement("li");
    upgradeLi.innerText = `${upgrade.name} - ${upgrade.price}`;

    // determine in what kind of state it is ind
    upgradeLi.className = "upgrade-list-item"

    upgradeLi.addEventListener("click", onUpgradeClick);

    return upgradeLi;
}

function determineUpgradeElementStyle(boughtState: BoughtTypes) {
    switch (boughtState) {
        case "NotEnoughFundsToBuy": {
            
            break;
        }
        case "HasFundsButNotOwned": {
            break;
        }
        case "OwnedByPlayter": {
            break;
        }
    }
}