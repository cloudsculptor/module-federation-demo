import {StepHeader} from "@step-common-header/StepHeader";
import {Workflow} from "./modules/Workflow/Workflow.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <>
            <StepHeader/>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/dealings"
                        element={<Workflow step={"dealings"}/>}
                    />
                    <Route path="/" element={<Navigate to={"/dealings"} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App