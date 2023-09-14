import {Dealing} from "./Dealing.tsx";
import {useParams} from "react-router-dom";
import {dealingsService} from "../Dealings/Dealings.service.ts";

export const DealingLoader = () => {
    const { dealingId } = useParams();
    const { fetchDealing } = dealingsService()
    const dealing = fetchDealing(Number(dealingId));
    return (<Dealing dealing={dealing}/>)
}