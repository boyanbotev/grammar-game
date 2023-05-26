import { Application } from 'pixi.js';
import { useRef, useEffect } from 'react';
import { GameScene } from '../../pixi/pixi-scenes/gameScene';

function PixiCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        const canvas = canvasRef.current;
        const app = new Application({
            view: canvas as unknown as undefined,
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 0x999999,
        });

        // temp
        app.stage.addChild(new GameScene);

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

        //This component should have a simple interface that allows it to receive data and commands from the scene components.

        // State management
        // Use a state management library like Redux or React Context API to manage the shared data and state between the scene components 
        // and the PixiCanvas component. 
        // This will allow you to pass necessary data and commands between them without directly coupling them.

        // Scene switching
        // When switching between scenes, use the scene management system to unload the current scene,
        // load the necessary assets for the new scene, and inform the PixiCanvas component about the scene change. 
        // The PixiCanvas component can then update its visuals accordingly.

    });

    return <canvas ref={canvasRef}/>;
}

export default PixiCanvas;