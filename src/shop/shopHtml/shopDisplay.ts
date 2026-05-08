import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgradeViewModel} from "../models/IUpgradeViewModel.ts";

const shop = new Shop();

showUpgradeList()

function showUpgradeList() {
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
    upgradeLi.className = "upgrade-list-item"
    upgradeLi.addEventListener("click", onUpgradeClick);

    return upgradeLi;
}