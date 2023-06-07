import { Application } from 'pixi.js';
import { useRef, useEffect, useState } from 'react';
import { FightScene } from '../../pixi/pixi-scenes/fightScene';
import { CanvasSceneData, SceneType, } from '../../common/types';
import { Scene } from '../../pixi/pixi-scenes/Scene';

export type CanvasProps = {
    canvasSceneData: CanvasSceneData,
}

const PixiCanvas: React.FC<CanvasProps> = ({ canvasSceneData }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
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

        if (canvasSceneData)
        switch (canvasSceneData.sceneType) {
            case SceneType.fight:
                const scene = new FightScene(screenWidth, screenHeight);
                app.stage.addChild(scene);
                setScene(scene);
                break;          
        }
        
        
        
        //GPT

        // State management
        // Use a state management library like Redux or React Context API to manage the shared data and state between the scene components 
        // and the PixiCanvas component. 
        // This will allow you to pass necessary data and commands between them without directly coupling them.

        // Scene switching
        // When switching between scenes, use the scene management system to unload the current scene,
        // load the necessary assets for the new scene, and inform the PixiCanvas component about the scene change. 
        // The PixiCanvas component can then update its visuals accordingly.
    }, []);

    useEffect(() => {
        console.log(canvasSceneData);
        if (scene){
            scene.update(canvasSceneData);
        }
    }, [canvasSceneData]);

    return <canvas ref={canvasRef}/>;
}

export default PixiCanvas;