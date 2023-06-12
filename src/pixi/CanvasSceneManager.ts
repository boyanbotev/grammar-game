import { Application } from "pixi.js";
import { Scene } from "./pixi-scenes/Scene";
import { LoaderScene } from "./pixi-scenes/loaderScene";

export class CanvasSceneManager {
    private app: Application;
    private currentScene: Scene | undefined | "initializing" = undefined;

    constructor(app: Application) {
        this.app = app;
    }

    public async initialize(scene: Scene) {
        const loaderScene = new LoaderScene();
        this.changeScene(loaderScene);
        await loaderScene.loadAssets();
        this.changeScene(scene);
    }

    public changeScene(newScene: Scene): void {
        console.log("change Scene", newScene);
        if (this.currentScene === undefined) {
            this.currentScene = "initializing";
            this.initialize(newScene);
            return;
        }

        if (this.currentScene && this.currentScene !== "initializing") {
            this.app.stage.removeChild(this.currentScene);
            console.log("destroy old scene");
            this.currentScene.destroy();
        }

        this.currentScene = newScene;
        this.app.stage.addChild(this.currentScene);
    }
}
