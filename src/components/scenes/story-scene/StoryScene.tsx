import { observer } from 'mobx-react-lite';
import React from 'react';

import { CanvasSceneData, StorySceneTextData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import TextContent from '../../grammar-content/text-content/TextContent';
import Button from '../../grammar-content/button/Button';
import ItemContainer from '../../grammar-content/item-container/ItemContainer';

type StorySceneProps = {
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const StoryScene: React.FC<StorySceneProps> = observer(({ }) => {
    const { gameStore: game, storySceneStore } = useGame();
    const textData = scenesData[game.getSceneIndex()].textData as StorySceneTextData;

    const goToNextSlide = () => {
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
        <div className="UIlayer">
            <ItemContainer>
                <TextContent>
                    {textData.storyText[storySceneStore.getBackgroundIndex()]}
                </TextContent>
            </ItemContainer>
            <ItemContainer>
                <Button onClick={goToNextSlide}>
                    next
                </Button>
            </ItemContainer>
        </div>  
    )
});

export default StoryScene;
