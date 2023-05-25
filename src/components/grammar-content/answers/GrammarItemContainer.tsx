import React from "react";
import './GrammarItemContainer.css';

type GrammarItemProps = {
    children: React.ReactNode;
}
const GrammarItemContainer: React.FC<GrammarItemProps> = ({ children }) => {
    return (
        <div className="answers">
            {children}
        </div>
    )
}

export default GrammarItemContainer;