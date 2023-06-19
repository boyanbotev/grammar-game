import { observer } from 'mobx-react-lite';
import React, {useEffect} from 'react';

import { CanvasSceneData, StorySceneTextData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import TextContent from '../../grammar-content/text-content/TextContent';
import Button from '../../grammar-content/button/Button';
import GrammarItemContainer from '../../grammar-content/grammar-item-container/GrammarItemContainer';

type StorySceneProps = {
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const StoryScene: React.FC<StorySceneProps> = observer(({ }) => {
    const { gameStore: game, storySceneStore } = useGame();
    const textData = scenesData[game.getSceneIndex()].textData as StorySceneTextData;

    const gotToNextSlide = () => {
        console.log("next slide");
        if (storySceneStore.getBackgroundIndex() >= textData.storyText.length -1) {
            goToNextScene();
            return;
        }
        storySceneStore.incrementBackgroundIndex();
    }

    const goToNextScene  = () => {
        storySceneStore.setBackgroundIndex(0);
        game.incrementSceneIndex();
    };

    console.log("render story scene");

    return (
        <div id="UIlayer">
            <GrammarItemContainer>
                <TextContent>
                    {textData.storyText[storySceneStore.getBackgroundIndex()]}
                </TextContent>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Button onClick={gotToNextSlide}>
                    next
                </Button>
            </GrammarItemContainer>
        </div>  
    )
});

export default StoryScene;

// TODO: changescene is not instigating scene with the right data