import {IDealing} from "dealing-dealings/src/modules/Dealings/models/IDealing.ts";
import {IInstrument} from "./models/IInstrument.ts";

export const PrepareInstrument = (props: {
    dealing: IDealing;
    instrument: IInstrument;
}) => {
    return (
        <section className={"PrepareInstrument"}>
            PrepareInstrument
            {props.dealing.dealingId}
            {props.instrument.instrumentId}
        </section>
    )
}