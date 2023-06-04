import React from "react";
import './Button.css';

type ButtonProps = {
    children: React.ReactNode,
    onClick?: (args?: any) => any // avoid any?,
    className?: string,
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <>
            <button onClick={onClick} className={`button glow ${className}`} >
                {children}
            </button>
        </>
    )
}

export default Button;