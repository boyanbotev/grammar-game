import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { CanvasSceneData, FightSceneCanvasData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';

type FightSceneProps = {
    Canvas: React.FC<CanvasProps>;
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const FightScene: React.FC<FightSceneProps> = observer(({ Canvas, canvasData, setCanvasData }) => {
    const { fightScene: fightSceneStore, game } = useGame();
    const playerHearts  = fightSceneStore.getPlayerHearts();
    const enemyHearts = fightSceneStore.getEnemyHearts();

    useEffect(() => {
        setHearts();
    }, []);

    const setHearts = () => {
        const data = scenesData[game.getSceneIndex()].canvasData as FightSceneCanvasData;
        fightSceneStore.setPlayerHearts(data.playerHearts.number);
        fightSceneStore.setEnemyHearts(data.opponentHearts.number);
    }

    // WHat about changed background Image?
    useEffect(() => {
        setFightCanvasData(canvasData as FightSceneCanvasData);     
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

    return (
        <>
            <Canvas canvasSceneData={canvasData}/>
            <div id="UIlayer">
                    <GrammarContent/>
            </div>  
        </>
    )
});

export default FightScene;
