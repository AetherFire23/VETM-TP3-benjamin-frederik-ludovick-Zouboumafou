import "../../styles/shop.css"
import {Shop} from "../models/Shop.ts";
import type {IUpgradeViewModel} from "../models/IUpgradeViewModel.ts";
import type {BoughtTypes} from "../models/BoughtTypesEnum.ts";
import type {UpgradeBase} from "../models/upgrades/UpgradeBase.ts";
import appState from "../../appstate/appState.ts";

const shop: Shop = new Shop();

rerenderUpgradeList()

appState.attach(rerenderUpgradeList)

function rerenderUpgradeList() {
    const shopList = document.getElementById("shop-list")!;
    const existingUpgrades = document.getElementById("shop-list")!
    existingUpgrades.replaceChildren()

    // Does not show owned by player !
    const upgradeHtmlElements = shop.getAvailableUpgrades()
        .map(x => ({
            name: x.name,
            price: x.currencyPrice.money,
            availability: determineBoughtType(x)
        } as IUpgradeViewModel))
        .filter(x => x.availability !== "OwnedByPlayter")
        .map(createUpgradeElement)

    for (let upgrade of upgradeHtmlElements) {
        shopList.append(upgrade);
    }
}

function determineBoughtType(upgradeBase: UpgradeBase): BoughtTypes {
    if (upgradeBase.isAcquired) return "OwnedByPlayter";

    const currentSelectedCurrencyMoney = appState.cookieCurrencies.find(x => x.name === upgradeBase.currencyPrice.name)!;
    const hasEnoughCurrency = currentSelectedCurrencyMoney.money >= upgradeBase.currencyPrice.money;

    const boughtType: BoughtTypes = hasEnoughCurrency ? "HasFundsButNotOwned" : "NotEnoughFundsToBuy";
    return boughtType;
}

function createUpgradeElement(upgrade: IUpgradeViewModel) {
    function onUpgradeClick() {

        shop.buyUpgrade(upgrade.name)


        rerenderUpgradeList();
    }

    const upgradeLi = document.createElement("li");
    upgradeLi.innerText = `${upgrade.name} - ${upgrade.price} - ${upgrade.availability}`;

    // determine in what kind of state it is ind
    upgradeLi.className = `${determineUpgradeElementStyle(upgrade.availability)}`

    upgradeLi.addEventListener("click", onUpgradeClick);

    return upgradeLi;
}


function determineUpgradeElementStyle(boughtState: BoughtTypes): string {
    let className: string = "upgrade-list-item ";
    switch (boughtState) {
        case "NotEnoughFundsToBuy": {
            className += "upgrade-list-item--unsufficient";
            break;
        }
        case "HasFundsButNotOwned": {
            className += "upgade-list-item--funds-unsufficient";
            break;
        }
    }

    return className;
}