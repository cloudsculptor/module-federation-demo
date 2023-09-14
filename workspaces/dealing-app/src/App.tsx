import {StepHeader} from "@step-common-header/StepHeader";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DealingsLoader} from "@dealing-dealings/DealingsLoader";
import {DealingWorkflowStep} from "@dealing-dealings/DealingWorkflowStep";

function App() {
    return (
        <BrowserRouter>
            <StepHeader/>
            <Routes>
                <Route
                    path="/dealings"
                    element={<DealingsLoader/>}
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