import React from "react";
import './Answers.css';

type AnswerProps = {
    children: React.ReactNode;
}
const Answers: React.FC<AnswerProps> = ({ children }) => {
    return (
        <div className="answers">
            {children}
        </div>
    )
}

export default Answers;