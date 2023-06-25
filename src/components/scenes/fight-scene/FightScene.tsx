import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import './FightScene.css';
import { CanvasSceneData, FightSceneCanvasData, FightSceneState } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import GrammarContent from '../../grammar-content/GrammarContent';
import config from '../../../common/config';
import LoseScreen from './lose-screen/LoseScreen';
import WinScreen from './win-screen/WinScreen';

type FightSceneProps = {
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const FightScene: React.FC<FightSceneProps> = observer(({ canvasData, setCanvasData }) => {
    const { fightSceneStore, gameStore } = useGame();
    const playerHearts  = fightSceneStore.getPlayerHearts();
    const enemyHearts = fightSceneStore.getEnemyHearts();

    const currentState = fightSceneStore.getCurrentState();
    const isGameStarted = currentState !== FightSceneState.initializing;

    useEffect(() => {
        setInitialHeartValues();
        fightSceneStore.setQuestionIndex(0);
    }, []);

    const setInitialHeartValues = () => {
        const data = scenesData[gameStore.getSceneIndex()].canvasData as FightSceneCanvasData;
        fightSceneStore.setPlayerHearts(data.playerHearts.number);
        fightSceneStore.setEnemyHearts(data.opponentHearts.number);

        fightSceneStore.setCurrentState(FightSceneState.playing);
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
            fightSceneStore.setCurrentState(FightSceneState.lost);
        }

        if (enemyHearts === 0 && isGameStarted) {
            fightSceneStore.setCurrentState(FightSceneState.won);
        }
    };

    const goToNextSceneAfterWaiting = () => {
        setTimeout(() => goToNextScene(), config.uiResponseMillis);
    }

    const goToNextScene = () => {
        fightSceneStore.setCurrentState(FightSceneState.initializing)
        gameStore.incrementSceneIndex();
    }

    const resetScene = () => {
        setInitialHeartValues();
        fightSceneStore.setQuestionIndex(0);
    }

    switch(currentState) {
        case FightSceneState.won:
            return (
                <div className="UIlayer">
                    <WinScreen goToNext={goToNextSceneAfterWaiting}/>
                </div>  
            )
        case FightSceneState.lost:
            return ( 
                <div className="UIlayer">
                    <LoseScreen resetScene={resetScene}/>
                </div>  
            )
        default:
            return (
                <div className="UIlayer">
                    <GrammarContent/>
                </div>  
            )
    }
});

export default FightScene;
