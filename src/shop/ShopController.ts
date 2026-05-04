/*
 seuleplace ousse que c'est permis de venir jouer avec le HTML
 */
import {Shop} from "./Shop.ts";

document.addEventListener('DOMContentLoaded', () => {
    showShop();
})
import "../styles/shop.css";

const shop: Shop = new Shop();

function showShop() {
    document.querySelector<HTMLDivElement>('#shop-div')!.innerHTML = `
    <section class="shop-window">
        <ul id="shop-list-ul" class="shop-list">
        ${refreshAvailableItems()}
        </ul>
    </section>
`
}
function refreshAvailableItems() {
    const data =`
    ${
        shop.getAvailableUpgrades().map(x => {
            return `
            <ul>
                ${x.name}
            </ul>
             `;
        }).join(" ")
    }
    `;

    return data;
}