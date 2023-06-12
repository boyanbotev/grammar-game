import { Application } from 'pixi.js';
import { useRef, useEffect, useState } from 'react';

import { FightScene } from '../../pixi/pixi-scenes/fightScene';
import { CanvasSceneData, SceneType, } from '../../common/types';
import { Scene } from '../../pixi/pixi-scenes/Scene';
import { CanvasSceneManager } from '../../pixi/CanvasSceneManager';
import { BaseScene } from '../../pixi/pixi-scenes/baseScene';

export type CanvasProps = {
    canvasSceneData: CanvasSceneData,
}

const PixiCanvas: React.FC<CanvasProps> = ({ canvasSceneData }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [sceneManager, setSceneManager] = useState<CanvasSceneManager | null>(null);
    const [app, setApp] = useState<Application | null>(null);
    const [scene, setScene] = useState<Scene>();

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
        console.log("create Pixi Application");
        setApp(app);
        
        return () => app.destroy();
    }, []);

    useEffect(() => {
        console.log(canvasSceneData);
        if (scene){
            scene.update(canvasSceneData);
        }
    }, [scene, canvasSceneData]);

    useEffect(() => {
        if (app === null) {
            console.log("app is null");
            return;
        }

        let manager;
        if (!sceneManager) {
            manager = new CanvasSceneManager(app);
            setSceneManager(manager);
        } else {
            manager = sceneManager;
        }

        if (canvasSceneData)
        switch (canvasSceneData.sceneType) {
            case SceneType.fight:
                const fightScene = new FightScene();
                manager.changeScene(fightScene);
                setScene(fightScene);
                break;
            case SceneType.story:
                const storyScene = new BaseScene();
                manager.changeScene(storyScene);
                setScene(storyScene);
                break;
        }
    }, [app, canvasSceneData]);

    return <canvas ref={canvasRef}/>;
};

export default PixiCanvas;
