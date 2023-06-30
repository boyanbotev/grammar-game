import React, { useState, useEffect } from "react";

import './HelperArrow.css';
import config from "../../../../common/config";

type HelperArrowProps = {
    children: React.ReactNode,
};

const manifestBaseURL = import.meta.env.BASE_URL;

const HelperArrow: React.FC<HelperArrowProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currrentTimeout, setCurrrentTimeout] = useState<NodeJS.Timeout>();

    useEffect(() => {
        setIsVisible(false);
        
        if (currrentTimeout !== undefined) {
            clearTimeout(currrentTimeout);
        }

        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, config.helperArrowAppearMillis);

        setCurrrentTimeout(timeout);
    },[children]);

    return (
        <div className="arrow-container">
            {isVisible?<img src={`${manifestBaseURL}arrow.png`} className="helper-arrow"/>:<></>}
            {children}
        </div>
    )
};

export default HelperArrow;
