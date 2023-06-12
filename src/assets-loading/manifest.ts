import { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "backgroundsBundle",
            assets: {
                0: 'src/assets/images/fight-bear.jpg',
                1: 'src/assets/images/fight-bear-lake.jpg',
                2: 'src/assets/images/owl.jpg',
            }
        },
        {
            name: "uiBundle",
            assets: {
                "heart": 'src/assets/images/heart light.png',
            }
        }
    ]
}