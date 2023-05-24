import { Application } from 'pixi.js';
import { useRef, useEffect } from 'react';

function PixiCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application({
            view: canvas,
            width: 800,
            height: 600,
            backgroundColor: 0x000000,
        })
    });

    return <canvas ref={canvasRef}/>;
}

export default PixiCanvas;