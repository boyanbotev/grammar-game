import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { CanvasSceneData, FightSceneCanvasData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import GrammarContent from '../../grammar-content/GrammarContent';
import config from '../../../common/config';

type FightSceneProps = {
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

// TODO: FightScene State
// Initializing, Playing, LoseScreen, WinScreen
const FightScene: React.FC<FightSceneProps> = observer(({ canvasData, setCanvasData }) => {
    const { fightSceneStore, gameStore } = useGame();
    const playerHearts  = fightSceneStore.getPlayerHearts();
    const enemyHearts = fightSceneStore.getEnemyHearts();
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        setInitialHeartValues();
        fightSceneStore.setQuestionIndex(0);
    }, []);

    const setInitialHeartValues = () => {
        const data = scenesData[gameStore.getSceneIndex()].canvasData as FightSceneCanvasData;
        fightSceneStore.setPlayerHearts(data.playerHearts.number);
        fightSceneStore.setEnemyHearts(data.opponentHearts.number);

        setIsGameStarted(true);
    }

    useEffect(() => {
        setFightCanvasData(canvasData as FightSceneCanvasData);    
        checkGameConditions(); 
    }, [playerHearts, enemyHearts]);

    const setFightCanvasData = (prevData: FightSceneCanvasData) => {
        setCanvasData(({
            ...prevData,
            playerHearts: { 
                ...prevData.playerHearts,
                number: playerHearts 
            },
            opponentHearts: { 
                ...prevData.opponentHearts,
                number: enemyHearts 
            },
        }));
    }

    const checkGameConditions = () => {
        // TODO: Lose Screen
        if (playerHearts === 0 && isGameStarted) {
            resetScene();
            console.log("LOSE");
        }

         // TODO: Win Screen
        if (enemyHearts === 0 && isGameStarted) {
            console.log("WIN");
            prepareToGoToNextScene();
        }
    };

    const prepareToGoToNextScene = () => {
        setTimeout(() => goToNextScene(), config.uiResponseMillis);
    }

    const goToNextScene = () => {
        console.log("GO TO NEXT");
        gameStore.incrementSceneIndex();
    }

    const resetScene = () => {
        setInitialHeartValues();
        fightSceneStore.setQuestionIndex(0);
    }

    return (
        <div id="UIlayer">
            <GrammarContent/>
        </div>  
    )
});

export default FightScene;
