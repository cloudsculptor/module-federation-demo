import {StepHeader} from "@step-common-header/StepHeader";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DealingsListWorkflowStep} from "@dealing-dealings/DealingsListWorkflowStep";
import {DealingWorkflowStep} from "@dealing-dealings/DealingWorkflowStep";

function App() {
    return (
        <BrowserRouter>
            <StepHeader/>
            <Routes>
                <Route
                    path="/dealings"
                    element={<DealingsListWorkflowStep/>}
                />
                <Route
                    path="/dealings/:dealingId"
                    element={<DealingWorkflowStep dealingId={123}/>}
                />
                <Route path="/" element={<Navigate to={"/dealings"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App