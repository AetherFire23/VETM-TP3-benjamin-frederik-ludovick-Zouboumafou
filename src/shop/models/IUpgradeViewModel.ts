import type {BoughtTypes} from "./BoughtTypesEnum.ts";

export interface IUpgradeViewModel {
    price: number;
    name: string;
    availability: BoughtTypes;
}