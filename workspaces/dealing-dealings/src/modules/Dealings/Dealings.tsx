import {IDealing} from "./models/Dealing.ts";
import "./Dealings.scss";

export const Dealings = (props: {
    dealings: IDealing[];
}) => {
    return (
        <section className={"Dealings"}>
            <h1>Dealings</h1>
            {props.dealings.map((dealing: IDealing) => (
                <div className={"Dealings-dealing"}>
                    <span>{dealing.clientRef1}</span>
                    <span>{dealing.clientRef2}</span>
                    <span>{dealing.dealingId}</span>
                </div>
            ))}
        </section>
    )
}