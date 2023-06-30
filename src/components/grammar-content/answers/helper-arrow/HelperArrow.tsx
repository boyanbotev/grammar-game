import React, { useState, useEffect } from "react";

import './HelperArrow.css';

type HelperArrowProps = {
    children: React.ReactNode,
};

const manifestBaseURL = import.meta.env.BASE_URL;

const HelperArrow: React.FC<HelperArrowProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        },6000);
    },[children]);

    return (
        <div className="arrow-container">
            {isVisible?<img src={`${manifestBaseURL}arrow.png`} className="helper-arrow"/>:<></>}
            {children}
        </div>
    )
};

export default HelperArrow;
