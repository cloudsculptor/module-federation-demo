import {Breadcrumb} from "./Breadcrumb.tsx";
import {useParams} from "react-router-dom";

export const BreadcrumbLoader = () => {
    const { dealingId, instrumentId } = useParams();
    return (<Breadcrumb dealingId={dealingId} instrumentId={instrumentId}/>)
}