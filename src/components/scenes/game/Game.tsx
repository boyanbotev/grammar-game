import './Game.css';
import PixiCanvas from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData } from '../../../common/types';
import { useState, useEffect } from 'react';

function Game() {
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
        }, 5000);
    }, []);

    return (
        <>
            <PixiCanvas canvasSceneData={canvasData}/>
            <div id="UIlayer">
                <GrammarContent />
            </div>
            <MenuButton/>       
        </>
    )
} 

export default Game;