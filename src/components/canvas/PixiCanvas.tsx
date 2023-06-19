import { Application } from 'pixi.js';
import { useRef, useEffect, useState } from 'react';

import { PixiFightScene } from '../../pixi/pixi-scenes/pixiFightScene';
import { CanvasSceneData, SceneType, } from '../../common/types';
import { Scene } from '../../pixi/pixi-scenes/Scene';
import { PixiCanvasSceneManager } from '../../pixi/pixiCanvasSceneManager';
import { PixiBaseScene } from '../../pixi/pixi-scenes/pixiBaseScene';
import { useGame } from '../../useGame';
import { observer } from 'mobx-react-lite';
import scenesData from '../../common/scenesData';

export type CanvasProps = {
    canvasSceneData: CanvasSceneData,
}

const PixiCanvas: React.FC<CanvasProps> = observer(({ canvasSceneData }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [sceneManager, setSceneManager] = useState<PixiCanvasSceneManager | null>(null);
    const [app, setApp] = useState<Application | null>(null);
    const [scene, setScene] = useState<Scene>();
    const { gameStore } = useGame();
   const sceneIndex = gameStore.getSceneIndex();

    useEffect(() => {
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if (!canvasRef.current) {
            console.log("NO CANVAS");
            return;
        }

        const app = new Application({
            view: canvasRef.current,
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 0x999999,
            resizeTo: window,

        });
        setApp(app);     

        const manager = new PixiCanvasSceneManager(app, onCanvasLoaded);
        setSceneManager(manager);
        
        return () => app.destroy();
    }, []);

    useEffect(() => {
        changeScene();
    }, [app, sceneIndex]);

    // TODO: canvas scene data is not chanmging when go from one story scene to the next - backgroundID is not updating
    useEffect(() => {
        if (scene){
            console.log(canvasSceneData);
            scene.update(canvasSceneData);
        }
    }, [scene, canvasSceneData]);

    const changeScene = () => {
        if (app === null) {
            console.log("app is null");
            return;
        }

        if (sceneManager === null) {
            console.log("sceneManager is null");
            return;
        }

        if (canvasSceneData === null) {
            console.log("canvasSceneData is null");
            return;
        }

        // Do this instead of using canvasSceneData.sceneType as that won't have updated yet
        const sceneType = scenesData[sceneIndex].canvasData.sceneType;
        // However, this means that the scene is created with the wrong canvasData

        switch (sceneType) {
            case SceneType.fight:
                const fightScene = new PixiFightScene();
                sceneManager.changeScene(fightScene);
                setScene(fightScene);
                break;
            case SceneType.story:
                const storyScene = new PixiBaseScene();
                sceneManager.changeScene(storyScene);
                setScene(storyScene);
                break;
        }
    }

    const onCanvasLoaded = () => {
        gameStore.setCanvasLoaded(true);
    }

    return <canvas ref={canvasRef}/>;
});

export default PixiCanvas;
