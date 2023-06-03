import React from "react";
import './Button.css';

type ButtonProps = {
    children: React.ReactNode,
    onClick?: (args?: any) => any // avoid any?
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="button glow">
                {children}
            </button>
        </>
    )
}

export default Button;