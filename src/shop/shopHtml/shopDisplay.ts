import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgrade} from "../models/IUpgrade.ts";

const show = new Shop();

window.addEventListener("DOMContentLoaded", () => {
    showUpgradeList();
});

function showUpgradeList() {
    const shopList = document.getElementById("shop-list")!;
    const upgrades = show.getAvailableUpgrades().map(createUpgradeElement);

    for (let upgrade of upgrades) {
        shopList.append(upgrade);
    }
}

function createUpgradeElement(upgrade: IUpgrade) {
    function onUpgradeClick() {
        console.log(upgrade);
    }

    const upgradeLi = document.createElement("li");
    upgradeLi.className = "upgrade";
    upgradeLi.innerText = upgrade.name;
    upgradeLi.className = "upgrade-list-item"
    upgradeLi.addEventListener("click", () => onUpgradeClick());
    return upgradeLi;
}