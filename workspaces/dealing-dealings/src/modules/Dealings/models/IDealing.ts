import {IInstrument} from "./IInstrument.ts";

export interface IDealing {
    dealingId: number;
    clientRef1: string;
    clientRef2: string;
    instruments: IInstrument[];
}