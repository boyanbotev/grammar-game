import { observer } from 'mobx-react-lite';

import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData, SceneType } from '../../../common/types';
import React, { useEffect, useState } from 'react';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import FightScene from '../fight-scene/FightScene';
import StoryScene from '../story-scene/StoryScene';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

const Game: React.FC<GameProps> = observer(({ canvasComponent: CanvasComponent }) => {
    const { gameStore: game } = useGame();
    const [canvasData, setCanvasData] = useState<CanvasSceneData>(scenesData[game.getSceneIndex()].canvasData);
    const sceneType = scenesData[game.getSceneIndex()].canvasData.sceneType;
    const sceneIndex = scenesData[game.getSceneIndex()];
    const isLoaded = game.getCanvasLoaded();

    useEffect(() => {
        setCanvasData(scenesData[game.getSceneIndex()].canvasData);
    }, [sceneIndex]);

    const chooseScene = () => {
        switch(sceneType) {
            case SceneType.fight:
                return (
                    <>
                        <FightScene canvasData={canvasData} setCanvasData={setCanvasData}/>
                        <MenuButton />
                    </>
                )
            case SceneType.story:
                return (
                    <>
                        <StoryScene canvasData={canvasData} setCanvasData={setCanvasData}/>
                        <MenuButton />
                    </>
                )
            default:
                return <></>
        }     
    }

    const SceneComponents = chooseScene();

    return (
        <>
            <CanvasComponent canvasSceneData={canvasData} />
            {isLoaded ? SceneComponents : null}
        </>
    )
});

export default Game;
