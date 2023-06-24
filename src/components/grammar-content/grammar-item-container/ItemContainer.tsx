import React from "react";
import './ItemContainer.css';

type ItemContainerProps = {
    children: React.ReactNode;
}
const ItemContainer: React.FC<ItemContainerProps> = ({ children }) => {
    return (
        <div className="item-container">
            {children}
        </div>
    )
}

export default ItemContainer;