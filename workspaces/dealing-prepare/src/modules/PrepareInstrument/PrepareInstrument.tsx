import {IDealing} from "dealing-dealings/src/modules/Dealings/models/IDealing.ts";
import {IInstrument} from "./models/IInstrument.ts";
import "./PrepareInstrument.scss";

export const PrepareInstrument = (props: {
    dealing: IDealing;
    instrument: IInstrument;
}) => {
    return (
        <section className={"PrepareInstrument"}>
            <h1>Prepare Instrument</h1>
            <pre>
                <code>
                    {JSON.stringify(props, null, 2)}
                </code>
            </pre>
        </section>
    )
}