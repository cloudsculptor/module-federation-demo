import {StepHeader} from "@step-common-header/StepHeader";
import {Workflow} from "./modules/Workflow/Workflow.tsx";

function App() {
    return (
        <>
            <StepHeader/>
            <p>dealing-app</p>
            <Workflow step={"dealings"}/>
        </>
    )
}

export default App