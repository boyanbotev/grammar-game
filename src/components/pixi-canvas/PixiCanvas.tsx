import { Application } from 'pixi.js';
import { useRef, useEffect } from 'react';
import { GameScene } from '../../pixi/pixi-scenes/gameScene';

function PixiCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application({
            view: canvas,
            width: 653,
            height: 280,
            backgroundColor: 0x000000,
        });

        // temp
        app.stage.addChild(new GameScene);
    });

    return <canvas ref={canvasRef}/>;
}

export default PixiCanvas;