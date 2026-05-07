import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgrade} from "../models/IUpgrade.ts";

const show = new Shop();

//
// window.addEventListener("DOMContentLoaded", () => {
//     const shopDiv = document.getElementById("shop-div");
//     if (!shopDiv) throw new DOMException("Null patante blabla");
//     shopDiv.innerHTML = `
//     <div class="shop-window">
//     <div> exxzit </div>
//     <h1> WElcome to the upgrade shop</h1>
//     <h2 > Upgrades for almost everyone ;P </h2>
//     <ul id="shop-list">
//     </ul>
//     </div>
// `;
//
//     console.log("sds")
//     document.getElementById("shop-div")
//     showUpgradeList();
// });

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