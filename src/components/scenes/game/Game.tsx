import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData } from '../../../common/types';
import React, { useState, useEffect } from 'react';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

const Game: React.FC<GameProps> = ({ canvasComponent: CanvasComponent }) => {
    const [canvasData, setCanvasData] = useState<CanvasSceneData>({
        backGroundImageID: 1,
    })

    useEffect(() => {
        // test that PixiCanavas updates without restarting pixi app
        setInterval(() => {
            // toggle image
            setCanvasData({
                backGroundImageID: (canvasData.backGroundImageID = canvasData.backGroundImageID === 1 ? 0 : 1 ),
            });
        }, 1000);
    }, []);

    return (
        <>
            <CanvasComponent canvasSceneData={canvasData} />
            <div id="UIlayer">
                <GrammarContent />
            </div>
            <MenuButton/>       
        </>
    )
} 

export default Game;