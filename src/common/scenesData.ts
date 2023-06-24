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
                "The boy hit the bear with his sword.",
                "And the bear said 'OWWW!' and ran away as fast as he could."
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
                "At last, the boy came to his home. But something was wrong!",
                "A red flag was in the ground."
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
                "He came to a lake. But Mum and Dad were not there.",
                "He kept on walking."
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
                "The boy walked on through the deep dark forest. Mum and Dad were not there.",
                "He kept on walking."
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
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 13,
        },
        textData: {
            storyText: [
                "The boy won! But there were more soldiers.",
                "Too many soldiers!",
                "The boy ran and ran as fast as he could...",
                "...to get away from all the soldiers.",
            ]
        }
    },
    {
        
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 14,
        },
        textData: {
            storyText: [
                "The boy was lucky!",
                "An owl flew down and picked him up and saved him from the soldiers."
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 15,
        },
        textData: {
            storyText: [
                "And the owl put him down and said...",
                "'Twit twoo little one. How did you think you could fight all those soldiers?'",
                "'You must learn the grammar of past tense. That way you can fight even a hundred soldiers.'",
                "'What is past tense?' said the boy.",
                "'Past tense is words like 'played' and 'jumped' and 'walked.' They talk about what happened before.'",
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 16,
        },
        textData: {
            storyText: [
                "The owl showed him a magic book.",
                "Inside it said...",
                "'Some past tense words have '-ed.' Like 'walked' and 'jumped.'",
                "Listen to this... ",
                "'Yesterday I walked in the forest.'",
                "'Before, I jumped up and down.'",
                "'Did you see? Some words have '-ed' in past tense.'"
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 17,
        },
        textData: {
            storyText: [
                "The owl showed him a special stone.",
                "It had writing on it.",
                "The boy tried to read it, but he couldn't understand.",
                "He looked for the owl, but the owl was gone.",
                "'I wish someone could help me read this,' the boy said.",   
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 18,
        },
        textData: {
            storyText: [
                "'I'll help you read it,' said a voice.",
                "'Who's that?' said the boy.",
                "It was a rabbit.",
                "'What?' said the boy. 'Rabbits can't read!'",
                "'I can,' said the rabbit.",
                "'Really?' said the boy. 'What does it say?'",
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 19,
        },
        textData: {
            storyText: [
                "'It's about the Romans,' the rabbit said.",
                "'Who are the Romans?' asked the boy.",
                "'They came over the sea in big ships,' said the rabbit.",
                "'They came with fire and swords.'",
                "'Are they the soldiers who broke my town?' said the boy.",
                "'Yes,' said the rabbit.",
                "'Where are my Mum and Dad?' the boy asked.",
                "'I don't know,' the rabbit said. 'I think the Romans took them to Londinium.'",
            ]
        }
    },
    {    
        canvasData: {
            sceneType: SceneType.story,
            backGroundImageID: 21,
        },
        textData: {
            storyText: [
                "'What?' said the boy. 'Londinium?'",
                "'Yes,' said the rabbit. 'It's the Romans' biggest town.'"
            ]
        }
    },
]

export default scenesData;
