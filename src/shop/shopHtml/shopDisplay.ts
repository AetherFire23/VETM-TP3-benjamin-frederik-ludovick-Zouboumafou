import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgrade} from "../models/IUpgrade.ts";

const show = new Shop();

window.addEventListener("DOMContentLoaded", onDomContentLoaded);

function onDomContentLoaded() {
    document.getElementById("shop-div")!.innerHTML = `
    <div class="shop-window">
    <div class="exit-shop-button"> X </div> 
    <ul id="shop-list">
    </ul>
    </div>
`;

    showUpgradeList();
}


function showUpgradeList() {
    function createUpgradeElement(upgrade: IUpgrade): HTMLLIElement {
        function onUpgradeClick() {
            console.log(upgrade);
        }

        const upgradeLi: HTMLLIElement = document.createElement("li");
        upgradeLi.innerText = upgrade.name
        upgradeLi.addEventListener("click", () => onUpgradeClick());

        return upgradeLi;
    }

    const shopList = document.getElementById("shop-list")!;

    const upgrades = show.getAvailableUpgrades().map(x => createUpgradeElement(x))

    upgrades.forEach(upgradeElement => {
        shopList.appendChild(upgradeElement);
    })
}


/*
EXIT BUTTON
 */

