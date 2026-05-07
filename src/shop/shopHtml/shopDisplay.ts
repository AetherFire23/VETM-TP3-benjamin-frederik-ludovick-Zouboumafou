import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgrade} from "../models/IUpgrade.ts";

const show = new Shop();

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("shop-div")!.innerHTML = `
    <div class="shop-window"> 
    <ul id="shop-list">
    
    </ul>
    </div>
`;

    document.getElementById("shop-div")!.innerHTML = ``;

});


function showUpgradeList() {
    const shopList = document.getElementById("shop-list")!;

    const upgrades = show.getAvailableUpgrades().map(x=> createUpgradeElement(x))
    shopList.appendChild(upgrades)

}

function createUpgradeElement(upgrade: IUpgrade) {
    function onUpgradeClick() {
        console.log(upgrade);
    }

    const upgradeLi = document.createElement("li");

    upgradeLi.addEventListener("click", () => onUpgradeClick());
}