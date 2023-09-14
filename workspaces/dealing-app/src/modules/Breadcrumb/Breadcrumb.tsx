export const Breadcrumb = (props: {
    dealingId?: string;
    instrumentId?: string;
}) => {
    if (!props.dealingId && !props.instrumentId) {
        return "sdfsdf"
    } else {
        return (
            <section className={"Breadcrumb"}>
                {!props.instrumentId ? (
                    <span>Dealing {props.dealingId}</span>
                ) : (
                    <>
                        <span>Dealing {props.dealingId}</span>
                        <span>Instrument {props.instrumentId}</span>
                    </>
                )}
            </section>
        )
    }
}