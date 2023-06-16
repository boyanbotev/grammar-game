import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { CanvasSceneData, FightSceneCanvasData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import GrammarContent from '../../grammar-content/GrammarContent';

type FightSceneProps = {
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const FightScene: React.FC<FightSceneProps> = observer(({ canvasData, setCanvasData }) => {
    const { fightScene: fightSceneStore, game } = useGame();
    const playerHearts  = fightSceneStore.getPlayerHearts();
    const enemyHearts = fightSceneStore.getEnemyHearts();
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        setInitialHeartValues();
    }, []);

    const setInitialHeartValues = () => {
        const data = scenesData[game.getSceneIndex()].canvasData as FightSceneCanvasData;
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
        if (playerHearts === 0 && isGameStarted) {
            resetScene();
            console.log("LOSE");
        }

        if (enemyHearts === 0 && isGameStarted) {
            console.log("WIN");
            goToNextScene();
        }
    };

    const goToNextScene = () => {
        game.incrementSceneIndex();
    }

    // TODO: Lose Screen
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
