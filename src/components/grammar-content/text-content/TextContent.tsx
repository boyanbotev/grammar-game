import React from "react";
import './TextContent.css';

type QuestionProps ={
    children?: React.ReactNode,
}

const TextContent: React.FC<QuestionProps> = ({ children }) => {
    return (
        <div className="text-content" data-testid="question">
            <p> 
                {children}
            </p>
        </div>
    )
}

export default TextContent;