import React from "react";

type AnswerProps = {
    children: React.ReactNode;
}
const Answers: React.FC<AnswerProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Answers;