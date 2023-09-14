import {IDealing} from "./models/IDealing.ts";

export const DEALING_DATA: IDealing[] = [
    {
        dealingId: 36247,
        clientRef1: "Richie",
        clientRef2: "Thomas",
        instruments: [
            {
                instrumentId: 72838,
                instrumentType: "Discharge of Mortgage"
            },
            {
                instrumentId: 96786,
                instrumentType: "Mortgage"
            }
        ],
    },
    {
        dealingId: 76841,
        clientRef1: "Thomas",
        clientRef2: "Jefferson",
        instruments: [
            {
                instrumentId: 22638,
                instrumentType: "Transfer"
            },
            {
                instrumentId: 16689,
                instrumentType: "Mortgage"
            }
        ],
    }
]