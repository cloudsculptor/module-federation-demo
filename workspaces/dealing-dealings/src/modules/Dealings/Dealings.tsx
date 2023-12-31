import "./Dealings.scss";
import {Link} from "react-router-dom";
import {IDealing} from "./models/IDealing.ts";

export const Dealings = (props: {
    dealings: IDealing[];
}) => {
    return (
        <section className={"Dealings"}>
            <h1>Dealings</h1>
            {props.dealings.map((dealing: IDealing) => (
                <Link className={"Dealings-dealing"} to={`/dealings/${dealing.dealingId}`}>
                    <span>{dealing.description}</span>
                    <span>{dealing.dealingId}</span>
                </Link>
            ))}
        </section>
    )
}