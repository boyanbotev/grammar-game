import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData, SceneType } from '../../../common/types';
import React, { useState, useEffect } from 'react';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

const Game: React.FC<GameProps> = ({ canvasComponent: CanvasComponent }) => {
    const [canvasData, setCanvasData] = useState<CanvasSceneData>({
        sceneType: SceneType.fight,
        backGroundImageID: 1,
    });

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
