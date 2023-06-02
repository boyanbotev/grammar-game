import React from "react";
import MenuButtonBar from "./menu-button-bar/MenuButtonBar";
import './MenuButton.css';

const MenuButton: React.FC = () => {
    return (
        <div className="menu-button" data-testid="menu-button">
            <MenuButtonBar/>
            <MenuButtonBar/>
            <MenuButtonBar/>
        </div>
    );
}

export default MenuButton;