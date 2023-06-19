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
            questionIDs: [0,1,2,3,4,5,6,7,8,9,10],
        }
    },
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 2,
        },
        textData: {
            storyText: [
                "Aurora had a special gift. She could see colours whenever she heard sounds.",
                "Even though she couldn't see with her eyes, her world was filled with beautiful colours that danced around her."
            ]
        }
    },
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 3,
        },
        textData: {
            storyText: [
                "ss",
                "ssg"
            ]
        }
    }
]

export default scenesData;
