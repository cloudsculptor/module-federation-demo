import {Dealings} from "./Dealings.tsx";
import {dealingsService} from "./Dealings.service.ts";

export const DealingsLoader = () => {
    const { fetchDealings } = dealingsService();
    const dealings = fetchDealings();
    return (
        <Dealings dealings={dealings} />
    )
}