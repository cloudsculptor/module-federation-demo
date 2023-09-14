import {IDealing} from "./models/IDealing.ts";
import {DEALING_DATA} from "./Dealings.data.ts";

export const dealingsService = (): {
    fetchDealing: (dealingId: number) => IDealing;
    fetchDealings: () => IDealing[];
} => {
    const fetchDealings = (): IDealing[] => {
        return DEALING_DATA
    }

    const fetchDealing = (dealingId: number): IDealing => {
        return DEALING_DATA.find((dealing: IDealing) => dealing.dealingId === dealingId)!;
    }

    return {
        fetchDealing,
        fetchDealings
    }
}