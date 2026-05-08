import type {BoughtTypes} from "./BoughtTypesEnum.ts";

export interface IUpgradeViewModel {
    price: number;
    name: string;
    isBuyable: boolean;
    availability: BoughtTypes;
}