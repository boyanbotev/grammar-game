import { Scene } from "./Scene";
import { CanvasSceneData } from "../../common/types";
import { Container, Graphics, Assets } from "pixi.js";
import { manifest } from "../../assets-loading/manifest";

export class LoaderScene extends Container implements Scene {
    private readonly loaderBar: Container;
    private readonly loaderBarBoder: Graphics;
    private readonly loaderBarFill: Graphics;

    constructor() {
        super();

        const loaderBarWidth = window.innerWidth * 0.8;
        const loaderBarHeight = window.innerHeight * 0.05;

        this.loaderBarFill = new Graphics();
        this.loaderBarFill.beginFill(0x00ff00, 1);
        this.loaderBarFill.drawRect(0, 0, loaderBarWidth, loaderBarHeight);
        this.loaderBarFill.endFill();
        this.loaderBarFill.scale.x = 0;

        this.loaderBarBoder = new Graphics();
        this.loaderBarBoder.lineStyle(10, 0x0, 1);
        this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, loaderBarHeight);

        this.loaderBar = new Container();
        this.loaderBar.addChild(this.loaderBarFill);
        this.loaderBar.addChild(this.loaderBarBoder);
        this.loaderBar.position.x = (window.innerWidth - this.loaderBar.width) / 2;
        this.loaderBar.position.y = (window.innerHeight - this.loaderBar.height) / 2;
        this.addChild(this.loaderBar);
    }

    public async loadAssets(): Promise<void> {
        await Assets.init({ manifest: manifest });
        console.log("load assets");

        const bundleIds = manifest.bundles.map((bundle) => bundle.name);

        await Promise.all([
            Assets.loadBundle(bundleIds, this.downloadProgress.bind(this)),
        ]);
    }

    private downloadProgress(progress: number): void {
        this.loaderBarFill.scale.x = progress;
    }

    public update(canvasSceneData: CanvasSceneData): void {
    }
}
