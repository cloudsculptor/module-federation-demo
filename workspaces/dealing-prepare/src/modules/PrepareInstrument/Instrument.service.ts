import {IInstrument} from "./models/IInstrument.ts";
import {INSTRUMENT_DATA} from "./Instrument.data.ts";

export const instrumentsService = (): {
    fetchInstrument: (instrumentId: number) => IInstrument;

} => {

    const fetchInstrument = (instrumentId: number): IInstrument => {
        return INSTRUMENT_DATA.find((instrument: IInstrument) => instrument.instrumentId === instrumentId)!;
    }

    return {
        fetchInstrument
    }
}