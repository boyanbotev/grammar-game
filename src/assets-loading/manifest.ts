import { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "backgroundsBundle",
            assets: {
                0: 'src/assets/images/opening.jpg',
                1: 'src/assets/images/fight-bear-wide.png',
                2: 'src/assets/images/bear-ran-away.jpg',
                3: 'src/assets/images/boy-watching.jpg',
                4: 'src/assets/images/romans-in-distance.jpg',
                5: 'src/assets/images/flag.png',
                6: 'src/assets/images/boy-with-flag.jpg',
                7: 'src/assets/images/searching-for-parents.jpg',
                8: 'src/assets/images/lake.jpg',
                9: 'src/assets/images/ominous-forest.jpg',
                10: 'src/assets/images/boy-sees-warriors.jpg',
                11: 'src/assets/images/centurion-shouting.jpg',
                12: 'src/assets/images/boy-fights-centurion.png',
                13: 'src/assets/images/boy-runs-away.jpg',
                14: 'src/assets/images/owl-saves-boy.jpg',
                15: 'src/assets/images/owl.jpg',
                16: 'src/assets/images/tablet-writing.jpg',
                17: 'src/assets/images/rabbit.jpg',
                18: 'src/assets/images/boy-and-rabbit-looking-up.jpg',
                19: 'src/assets/images/boy-and-rabbit-scared.jpg',
                20: 'src/assets/images/roman-ships.jpg',
                21: 'src/assets/images/boy-and-rabbit-scared.jpg',
            }
            // assets: {
            //     0: '@assets/images/opening.jpg',
            //     1: '@assets/images/fight-bear-wide.png',
            //     2: '@assets/images/bear-ran-away.jpg',
            //     3: '@assets/images/boy-watching.jpg',
            //     4: '@assets/images/romans-in-distance.jpg',
            //     5: '@assets/images/flag.png',
            //     6: '@assets/images/boy-with-flag.jpg',
            //     7: '@assets/images/searching-for-parents.jpg',
            //     8: '@assets/images/lake.jpg',
            //     9: '@assets/images/ominous-forest.jpg',
            //     10: '@assets/images/boy-sees-warriors.jpg',
            //     11: '@assets/images/centurion-shouting.jpg',
            //     12: '@assets/images/boy-fights-centurion.png',
            //     13: '@assets/images/boy-runs-away.jpg',
            //     14: '@assets/images/owl-saves-boy.jpg',
            //     15: '@assets/images/owl.jpg',
            //     16: '@assets/images/tablet-writing.jpg',
            //     17: '@assets/images/rabbit.jpg',
            //     18: '@assets/images/boy-and-rabbit-looking-up.jpg',
            //     19: '@assets/images/boy-and-rabbit-scared.jpg',
            //     20: '@assets/images/roman-ships.jpg',
            //     21: '@assets/images/boy-and-rabbit-scared.jpg',
            // },
        },
        {
            name: "uiBundle",
            assets: {
                // "heart": '@assets/images/heart light.png',
                "heart": 'src/assets/images/heart light.png',
            }
        }
    ]
}