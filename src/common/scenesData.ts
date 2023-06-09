import { Vector2 } from "./Vector2";
import { SceneData, SceneType } from "./types";

const scenesData: SceneData[] = [
    {
        canvasData: {
            sceneType: SceneType.fight,
            backGroundImageID: 0,
            playerHearts: {
                number: 3,
                position: new Vector2(window.innerWidth/1.13, window.innerHeight/2.5)
            },
            opponentHearts: {
                number: 7,
                position: new Vector2(window.innerWidth/2, 0)
            }
        },
        textData: {
            questionIndexes: [0,1],
        }
    },
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 2,
        },
        textData: {
            storyText: [
                "First of all, I hope you are happy every day. I'm sorry it's too late to write to you. I am very happy to hear about your new job. I also hope that your future job will bring you new experiences and different lives.",
                "GGGGGGGGGGGGGG"
            ]
        }
    }
]

export default scenesData;
