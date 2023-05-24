import React from "react";
import './Question.css';

type QuestionProps ={
    children?: React.ReactNode,
}

const Question: React.FC<QuestionProps> = ({ children }) => {
    return (
        <div className="question">
            <p> 
                {children}
            </p>
        </div>
    )
}

export default Question;