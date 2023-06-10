import { observer } from 'mobx-react-lite';
import React from 'react';

import { CanvasSceneData, StorySceneTextData } from '../../../common/types';
import { useGame } from '../../../useGame';
import scenesData from '../../../common/scenesData';
import { CanvasProps } from '../../canvas/PixiCanvas';
import Question from '../../grammar-content/question/Question';

type StorySceneProps = {
    Canvas: React.FC<CanvasProps>;
    canvasData: CanvasSceneData;
    setCanvasData: (data: CanvasSceneData) => void;
}

const StoryScene: React.FC<StorySceneProps> = observer(({ Canvas, canvasData, setCanvasData }) => {
    const { game } = useGame();
    const textData = scenesData[game.getSceneIndex()].textData as StorySceneTextData;
    const magicIndex = 0;

    return (
        <>
            <Canvas canvasSceneData={canvasData}/>
            <div id="UIlayer">
                    <Question>
                        {textData.storyText[magicIndex]}
                    </Question>
            </div>  
        </>
    )
});

export default StoryScene;