import {IDealing} from "./models/Dealing.ts";

export const Dealings = (props: {
    dealings: IDealing[];
}) => {
    return (
        <section className={"Dealings"}>
            <h1>Dealings</h1>
            {props.dealings.map((dealing: IDealing) => (
                <p>{dealing.dealingId}</p>
            ))}
        </section>
    )
}