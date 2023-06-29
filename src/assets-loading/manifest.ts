import { ResolverManifest } from "pixi.js";

const manifestBaseURL = import.meta.env.BASE_URL;

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "backgroundsBundle",
            assets: {
                0: `${manifestBaseURL}opening.jpg`,
                1: `${manifestBaseURL}fight-bear-wide.png`,
                2: `${manifestBaseURL}bear-ran-away.jpg`,
                3: `${manifestBaseURL}boy-watching.jpg`,
                4: `${manifestBaseURL}romans-in-distance.jpg`,
                5: `${manifestBaseURL}flag.png`,
                6: `${manifestBaseURL}boy-with-flag.jpg`,
                7: `${manifestBaseURL}searching-for-parents.jpg`,
                8: `${manifestBaseURL}lake.jpg`,
                9: `${manifestBaseURL}ominous-forest.jpg`,
                10: `${manifestBaseURL}boy-sees-warriors.jpg`,
                11: `${manifestBaseURL}centurion-shouting.jpg`,
                12: `${manifestBaseURL}boy-fights-centurion.png`,
                13: `${manifestBaseURL}boy-runs-away1.png`,
                14: `${manifestBaseURL}owl-saves-boy.png`,
                15: `${manifestBaseURL}owl.jpg`,
                16: `${manifestBaseURL}look-at-tome.jpg`,
                17: `${manifestBaseURL}tablet-writing.jpg`,
                18: `${manifestBaseURL}rabbit.jpg`,
                19: `${manifestBaseURL}roman-ships.jpg`,
                20: `${manifestBaseURL}boy-and-rabbit-scared.jpg`,
            },
        },
        {
            name: "uiBundle",
            assets: {
                "heart": `${manifestBaseURL}heart light.png`,
                "wound": `${manifestBaseURL}wound-doubled2.png`,
                "wound-fat" : `${manifestBaseURL}wound-fat.png`,
            }
        }
    ]
}