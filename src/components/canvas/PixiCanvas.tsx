import { Application } from 'pixi.js';
import { useRef, useEffect, useState } from 'react';
import { GameScene } from '../../pixi/pixi-scenes/gameScene';
import { CanvasSceneData } from '../../common/types';

export type CanvasProps = {
    canvasSceneData: CanvasSceneData,
}

const PixiCanvas: React.FC<CanvasProps> = ({ canvasSceneData }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameScene, setGameScene] = useState<GameScene>();

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

        const gameScene = new GameScene;
        app.stage.addChild(gameScene);
        setGameScene(gameScene);
        
        // sceneManager class

        // resizeManager class

        // decouple from PIXI implementation

        // store all scenes in data structure, 
        // which contains other data structures such as storyScenes, teachingScenes and gameScenes
        // and somehow is in sync with react.
        // When a scene changes, we want the React UI to change


        // How to sync React state and PIXI state?
        // Have a PIXISceneManager class that implements Manager interface?
        // Have a class that populates React components with the right content
        // on Scene Change?

        // How to communicate between React and PIXI?
        // have public methods / observer pattern?


        // Think of it this way...
        // User actions are all on react
        // So React Drives Pixi
        // That means, the pixiSceneManager responds to React class


        //GPT

        // State management
        // Use a state management library like Redux or React Context API to manage the shared data and state between the scene components 
        // and the PixiCanvas component. 
        // This will allow you to pass necessary data and commands between them without directly coupling them.

        // Scene switching
        // When switching between scenes, use the scene management system to unload the current scene,
        // load the necessary assets for the new scene, and inform the PixiCanvas component about the scene change. 
        // The PixiCanvas component can then update its visuals accordingly.
        // return () => app.destroy();
    }, []);

    useEffect(() => {
        // gameScene?.changeBackground(canvasSceneData.backGroundImageID);
    });

    return <canvas ref={canvasRef}/>;
}

export default PixiCanvas;