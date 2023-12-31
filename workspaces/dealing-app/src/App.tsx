import {StepHeader} from "@step-common-header/StepHeader";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DealingsLoader} from "@dealing-dealings/DealingsLoader";
import {DealingLoader} from "@dealing-dealings/DealingLoader";
import {PrepareInstrumentLoader} from "@dealing-prepare/PrepareInstrumentLoader";

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
                    element={<DealingLoader/>}
                />
                <Route
                    path="/dealings/:dealingId/instruments/:instrumentId"
                    element={<PrepareInstrumentLoader/>}
                />
                <Route path="/" element={<Navigate to={"/dealings"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App