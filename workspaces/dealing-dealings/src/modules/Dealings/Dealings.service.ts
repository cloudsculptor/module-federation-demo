import {IDealing} from "./models/Dealing.ts";

export const dealingsService = (): {
    fetchDealings: () => IDealing[];
} => {
    const fetchDealings = (): IDealing[] => {
        // Just return a canned answer rather than make API call
        return [
            {
                dealingId: 36247,
                clientRef1: "Richie",
                clientRef2: "Thomas"
            },
            {
                dealingId: 36247,
                clientRef1: "Richie",
                clientRef2: "Thomas"
            }
        ]
    }

    return {
        fetchDealings
    }
}