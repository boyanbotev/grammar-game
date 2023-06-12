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
import { usePixiApplication } from '../../../usePixiApplication';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

const Game: React.FC<GameProps> = observer(({ canvasComponent: CanvasComponent }) => {
    const { game } = useGame();
    const [canvasData, setCanvasData] = useState<CanvasSceneData>(scenesData[game.getSceneIndex()].canvasData);
    const sceneType = scenesData[game.getSceneIndex()].canvasData.sceneType;

    useEffect(() => {
        setCanvasData(scenesData[game.getSceneIndex()].canvasData);
    }, [sceneType]);

    const chooseScene = () => {
        switch(sceneType) {
            case SceneType.fight:
                console.log("rendering fight");
                return (
                    <>
                        <FightScene Canvas={CanvasComponent} canvasData={canvasData} setCanvasData={setCanvasData}/>
                        <MenuButton/>       
                    </>
                )
            case SceneType.story:
                console.log("rendering story");
                return (
                    <>
                        <StoryScene Canvas={CanvasComponent} canvasData={canvasData} setCanvasData={setCanvasData}/>
                        <MenuButton/>       
                    </>
                )
            default:
                throw new Error("Invalid scene type");
        }     
    }

    const Scene = chooseScene();

    switch(sceneType) {
        case SceneType.fight:
            console.log("rendering fight");
            return (
                <>
                    <FightScene Canvas={CanvasComponent} canvasData={canvasData} setCanvasData={setCanvasData}/>
                    <MenuButton/>       
                </>
            )
        case SceneType.story:
            console.log("rendering story");
            return (
                <>
                    <StoryScene Canvas={CanvasComponent} canvasData={canvasData} setCanvasData={setCanvasData}/>
                    <MenuButton/>       
                </>
            )
        default:
            throw new Error("Invalid scene type");
    }
});

export default Game;
