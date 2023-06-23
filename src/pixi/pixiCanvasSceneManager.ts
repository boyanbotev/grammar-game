import { Application } from "pixi.js";

import { Scene } from "./pixi-scenes/Scene";
import { PixiLoaderScene } from "./pixi-scenes/pixiLoaderScene";
import config from "../common/config";

export class PixiCanvasSceneManager {
    private app: Application;
    private onCanvasLoaded;
    private currentScene: Scene | undefined | "initializing" = undefined;

    constructor(
        app: Application, 
        onCanvasLoaded: () => void
        ) {
        this.app = app;
        this.onCanvasLoaded = onCanvasLoaded;
    }

    public async initialize(scene: Scene) {
        this.currentScene = "initializing";

        const loaderScene = new PixiLoaderScene();
        this.changeScene(loaderScene);
        await loaderScene.loadAssets();
        this.changeScene(scene);

        this.onCanvasLoaded();
    }

    public changeScene(newScene: Scene): void {
        console.log("change Scene", newScene);

        if (this.currentScene === undefined) {
            this.initialize(newScene);
            return;
        }

        this.removeSceneAfterWaiting(this.currentScene);
        this.stageScene(newScene);

        this.currentScene = newScene;
    }

    private removeSceneAfterWaiting(sceneToDestroy: Scene | "initializing"): void {
        setTimeout(() => {
            this.removeScene(sceneToDestroy);
        }, config.fadeTimeMillis);
    }

    public removeScene(scene: Scene | undefined | "initializing"): void {
        if(scene && scene !== "initializing") {
            this.app.stage.removeChild(scene);
            scene.destroy();
        }
    };

    public stageScene(scene: Scene): void {
        this.app.stage.addChild(scene);
        scene.fadeIn();
    };
}
