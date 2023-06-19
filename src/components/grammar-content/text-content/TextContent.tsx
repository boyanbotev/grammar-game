import React from "react";
import './TextContent.css';

type QuestionProps ={
    children?: React.ReactNode,
}

const TextContent: React.FC<QuestionProps> = ({ children }) => {
    return (
        <div className="question" data-testid="question">
            <p> 
                {children}
            </p>
        </div>
    )
}

export default TextContent;