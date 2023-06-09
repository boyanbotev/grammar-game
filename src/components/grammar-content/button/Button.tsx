import React from "react";
import './Button.css';

type ButtonProps = {
    children: React.ReactNode,
    onClick?: (args?: any) => any
    className?: string,
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <>
            <button onClick={onClick} className={`button ${className}`} >
                {children}
            </button>
        </>
    )
}

export default Button;