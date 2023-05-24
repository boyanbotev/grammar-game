import React from "react";

type AnswerProps = {
    children: React.ReactNode;
}
const Answers = (props: AnswerProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Answers;