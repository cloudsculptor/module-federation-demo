import {Dealings} from "../Dealings/Dealings.tsx";
import {dealingsService} from "../Dealings/Dealings.service.ts";

export const DealingsListWorkflowStep = () => {
    const { fetchDealings } = dealingsService();
    return (
        <Dealings dealings={fetchDealings()}/>
    )
}