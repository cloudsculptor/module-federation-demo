import "./Workflow.scss";
import {DealingsWorkflowStep} from "@dealing-dealings/DealingsWorkflowStep";

export const Workflow = (props: {
    step: string;
}) => {
    return (
        <div className={"Workflow"}>
            {props.step === "dealings" && <DealingsWorkflowStep/>}

        </div>
    )
}