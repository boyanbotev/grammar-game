import { observer } from 'mobx-react-lite';

import './Game.css';
import { CanvasProps } from '../../canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';
import { CanvasSceneData, SceneType } from '../../../common/types';
import React, { useState, useEffect } from 'react';
import { useGame } from '../../../useGame';

type GameProps = {
    canvasComponent: React.FC<CanvasProps>,
}

// TODO: make flexible to other scene types  / rename ?
const Game: React.FC<GameProps> = observer(({ canvasComponent: CanvasComponent }) => {
    const { game } = useGame();
    const playerHearts  = game.getPlayerHearts();
    const enemyHearts = game.getEnemyHearts();

    const [canvasData, setCanvasData] = useState<CanvasSceneData>({
        sceneType: SceneType.fight,
        backGroundImageID: 1,
        playerHearts: {
            number: playerHearts,
        },
        opponentHearts: {
            number: enemyHearts,
        }
    });

    useEffect(() => {
        game.setPlayerHearts(4);
        game.setEnemyHearts(9);
    }, []);

    useEffect(() => {
            setCanvasData((prevCanvasData) => ({
                ...prevCanvasData,
                playerHearts: { number: playerHearts },
                opponentHearts: { number: enemyHearts },
            }));
    }, [playerHearts, enemyHearts],);

    // TODO: Get question actions to trigger results in Game

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
