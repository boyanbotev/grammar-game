import { useEffect, useState, useRef } from 'react';
import { Application } from 'pixi.js';

export function usePixiApplication(): Application | null {
  const [pixiApp, setPixiApp] = useState<Application | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // can't be done without having the canvasRef, so needs to be done with the canvas

  useEffect(() => {
    const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log("use effect in usePixiApplication, canvasRef.current:", canvasRef.current);

    if (!canvasRef.current) return;

    console.log("create Pixi Application, usePixiApplication");

    const app = new Application({
      width: screenWidth,
      height: screenHeight,
      view: canvasRef.current,
      backgroundColor: 0x999999,
      resizeTo: window,
    });

    setPixiApp(app);

    return () => {
      app.destroy();
    };
  }, []);

  return pixiApp;
}