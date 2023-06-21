import { Vector2 } from "./Vector2";
import { SceneData, SceneType } from "./types";

const scenesData: SceneData[] = [
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 0,
        },
        textData: {
            storyText: [
                "One day, a boy walked through a magical forest.",
                "He heard something big rustling in the bushes.",
                "What was it? An animal?",
                "It was a bear!",
            ]
        }
    },  
    {
        canvasData: {
            sceneType: SceneType.fight,
            backGroundImageID: 1,
            playerHearts: {
                number: 3,
                position: new Vector2(window.innerWidth/1.13, window.innerHeight/2.5)
            },
            opponentHearts: {
                number: 4,
                position: new Vector2(window.innerWidth/2, 0)
            }
        },
        textData: {
            questionIDs: [0,1,2,3,4,],
        }
    },
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 2,
        },
        textData: {
            storyText: [
                "The boy hit the bear with his sword. And the bear said 'OWWW!' and ran away as fast as he could.",
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
                "So the boy walked on through the forest. He just wanted to get home.",
            ]
        }
    },
    {
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 4,
        },
        textData: {
            storyText: [
                "Far away in the bushes, some things were moving.",
                "What were they? People?",
                "The boy kept on walking. He just wanted to get home."
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 5,
        },
        textData: {
            storyText: [
                "At last, the boy came to his home. But something was wrong! A red flag was in the ground.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 6,
        },
        textData: {
            storyText: [
                "He walked around the town. All the houses were broken. Where was Mum and Dad?",
                "Everyone was gone."
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 7,
        },
        textData: {
            storyText: [
                "So he left his town and went looking for his Mum and Dad.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 8,
        },
        textData: {
            storyText: [
                "He came to a lake. But Mum and Dad were not there. He kept on walking.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 9,
        },
        textData: {
            storyText: [
                "The boy walked on through the deep dark forest. Mum and Dad were not there. He kept on walking.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 10,
        },
        textData: {
            storyText: [
                "Then, through the trees, he saw some people.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 11,
        },
        textData: {
            storyText: [
                "A person was shouting at the other people. He looked very angry.",
                "The boy stayed in the bushes. He wanted to hide.",
                "Crack! Oh no! The boy stepped on a stick.",
                "The people looked at him.",
            ]
        }
    },
    {
        canvasData: {
            sceneType: SceneType.fight,
            backGroundImageID: 12,
            playerHearts: {
                number: 3,
                position: new Vector2(window.innerWidth/7, window.innerHeight/2)
            },
            opponentHearts: {
                number: 7,
                position: new Vector2(window.innerWidth/1.3, window.innerHeight/3)
            }
        },
        textData: {
            questionIDs: [4,5,6,7,8,9,10,]
        }
    },

]

export default scenesData;
