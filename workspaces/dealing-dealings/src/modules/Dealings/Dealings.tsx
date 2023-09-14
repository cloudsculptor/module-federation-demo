import {IDealing} from "./models/Dealing.ts";
import "./Dealings.scss";
import {Link} from "react-router-dom";

export const Dealings = (props: {
    dealings: IDealing[];
}) => {
    return (
        <section className={"Dealings"}>
            <h1>Dealings</h1>
            {props.dealings.map((dealing: IDealing) => (
                <Link className={"Dealings-dealing"} to={`/dealings/${dealing.dealingId}`}>
                    <span>{dealing.clientRef1}</span>
                    <span>{dealing.clientRef2}</span>
                    <span>{dealing.dealingId}</span>
                </Link>
            ))}
        </section>
    )
}