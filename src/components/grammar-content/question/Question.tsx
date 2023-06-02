import React from "react";
import './Question.css';

type QuestionProps ={
    children?: React.ReactNode,
}

// rename?
const Question: React.FC<QuestionProps> = ({ children }) => {
    return (
        <div className="question glow-less" data-testid="question">
            <p> 
                {children}
            </p>
        </div>
    )
}

export default Question;