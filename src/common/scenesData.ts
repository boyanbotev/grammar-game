import { Vector2 } from "./Vector2";
import { SceneData, SceneType } from "./types";

const scenesData: SceneData[] = [
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageIDs: [0,1,2],
        },
        textData: {
            sceneType: SceneType.story,
            storyText: [
                "Test 0 1",
                "Test 0 2",
                "test 0 3"
            ]
        }
    },
    {
        canvasData: {
            sceneType: SceneType.fight,
            backGroundImageID: 4,
            playerHearts: {
                number: 3,
                position: new Vector2(100,100),
            },
            opponentHearts: {
                number: 5,
                position: new Vector2(0,0),
            }
        },
        textData: {
            sceneType: SceneType.fight,
            questionIndexes: [0,1],
        }
    }
]

export default scenesData;
