import { observer } from 'mobx-react-lite';

import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData, FightSceneCanvasData, SceneType } from '../../../common/types';
import React, { useState, useEffect } from 'react';
import { useGame } from '../../../useGame';
import { Vector2 } from '../../../common/Vector2';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

// TODO: make flexible to other scene types  / rename ?
const Game: React.FC<GameProps> = observer(({ canvasComponent: CanvasComponent }) => {
    const { game } = useGame();
    const playerHearts  = game.getPlayerHearts();
    const enemyHearts = game.getEnemyHearts();

    // should be on a different level of abstraction
    const [canvasData, setCanvasData] = useState<FightSceneCanvasData>({
        sceneType: SceneType.fight,
        backGroundImageID: 0,
        playerHearts: {
            number: playerHearts,
            position: new Vector2(window.innerWidth/1.13, window.innerHeight/2.5)
        },
        opponentHearts: {
            number: enemyHearts,
            position: new Vector2(window.innerWidth/2, 0)
        }
    });

    // TODO: GET this data from scene file
    // How do we know what scene we're on?
    // MobX store
    // should be on a different level of abstraction
    useEffect(() => {
        game.setPlayerHearts(3);
        game.setEnemyHearts(5);
    }, []);

    useEffect(() => {
            setCanvasData((prevCanvasData) => ({
                ...prevCanvasData,
                playerHearts: { 
                    ...prevCanvasData.playerHearts,
                    number: playerHearts 
                },
                opponentHearts: { 
                    ...prevCanvasData.opponentHearts,
                    number: enemyHearts 
                },
            }));
    }, [playerHearts, enemyHearts],);

    return (
        <>
            <CanvasComponent canvasSceneData={canvasData} />
            <div id="UIlayer">
                <GrammarContent />
            </div>
            <MenuButton/>       
        </>
    )
})

export default Game;
