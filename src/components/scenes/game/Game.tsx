import { observer } from 'mobx-react-lite';

import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData, FightSceneCanvasData, SceneType, StorySceneCanvasData, StorySceneTextData } from '../../../common/types';
import React, { useState, useEffect } from 'react';
import { useGame } from '../../../useGame';
import { Vector2 } from '../../../common/Vector2';
import scenesData from '../../../common/scenesData';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

// TODO: make flexible to other scene types  / rename ?
const Game: React.FC<GameProps> = observer(({ canvasComponent: CanvasComponent }) => {
    const { game } = useGame();
    const playerHearts  = game.getPlayerHearts(); // this should be handled Elsewhere
    const enemyHearts = game.getEnemyHearts();

    // should be on a different level of abstraction - and should get from scene file
    const [canvasData, setCanvasData] = useState<CanvasSceneData>(scenesData[game.getSceneIndex()].canvasData);

    // TODO: should be on a different level of abstraction
    useEffect(() => {
        switch (scenesData[game.getSceneIndex()].canvasData.sceneType) {
            case SceneType.fight:
                const data = scenesData[game.getSceneIndex()].canvasData as FightSceneCanvasData;
                game.setPlayerHearts(data.playerHearts.number);
                game.setEnemyHearts(data.opponentHearts.number);
        }
    }, []);

    // TODO: This is entirely based around Fight, should be decoupled into another component
    const setFightCanvasData = (prevData: FightSceneCanvasData) => {
        setCanvasData(({
            ...prevData,
            playerHearts: { 
                ...prevData.playerHearts,
                number: playerHearts 
            },
            opponentHearts: { 
                ...prevData.opponentHearts,
                number: enemyHearts 
            },
        }));
    }

    // TODO: This is entirely based around Fight, should be decoupled into another component
    useEffect(() => {
        switch(canvasData.sceneType) {
            case SceneType.fight:
                setFightCanvasData(canvasData as FightSceneCanvasData);
        }
            
    }, [playerHearts, enemyHearts],);

    // TODO: should render stuff below conditionally based on sceneType 
    const data = scenesData[game.getSceneIndex()];
    const TextContent = data.canvasData.sceneType===SceneType.fight ? <GrammarContent /> : <p>{data.canvasData.sceneType}</p>
    return (
        <>
            <CanvasComponent canvasSceneData={canvasData} />
            <div id="UIlayer">
                {TextContent}
            </div>
            <MenuButton/>       
        </>
    )
})

export default Game;
