import {PrepareInstrument} from "./PrepareInstrument.tsx";
import {useParams} from "react-router-dom";
import {dealingsService} from "dealing-dealings/src/modules/Dealings/Dealings.service.ts";
import {instrumentsService} from "./Instrument.service.ts";

export const PrepareInstrumentLoader = () => {
    const { dealingId, instrumentId } = useParams();
    const { fetchDealing } = dealingsService()
    const { fetchInstrument } = instrumentsService()
    const dealing = fetchDealing(Number(dealingId));
    const instrument = fetchInstrument(Number(instrumentId));
    return (<PrepareInstrument dealing={dealing} instrument={instrument}/>)
}