import {Link} from "react-router-dom";
import {IInstrument} from "../Dealings/models/IInstrument.ts";
import {IDealing} from "../Dealings/models/IDealing.ts";
import "./Dealing.scss";

export const Dealing = (props: {
    dealing: IDealing;
}) => {
    return (
        <section className={"Dealing"}>
                <h1>Instruments</h1>
                {props.dealing.instruments.map((instrument: IInstrument) => (
                    <Link className={"Dealing-instrument"} to={`/dealings/${props.dealing.dealingId}/instruments/${instrument.instrumentId}`}>
                        <span>{instrument.instrumentId}</span>
                        <span>{instrument.instrumentType}</span>
                    </Link>
                ))}
        </section>
    )
}