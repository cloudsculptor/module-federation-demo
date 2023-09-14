import {Dealing} from "./Dealing.tsx";
import {useParams} from "react-router-dom";

export const DealingLoader = () => {
    const {dealingId } = useParams();
    return (<Dealing dealingId={Number(dealingId)}/>)
}