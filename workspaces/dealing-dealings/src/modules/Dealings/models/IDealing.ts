import {IInstrument} from "./IInstrument.ts";

export interface IDealing {
    dealingId: number;
    description: string;
    instruments: IInstrument[];
}