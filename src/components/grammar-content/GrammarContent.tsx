import { observer } from'mobx-react-lite';

import './GrammarContent.css';
import TextContent from './text-content/TextContent';
import ItemContainer from './item-container/ItemContainer';
import { questions } from '../../common/questions';
import Answers from './answers/Answers';
import { useGame } from '../../useGame';
import scenesData from '../../common/scenesData';
import { FightSceneTextData } from '../../common/types';
import config from '../../common/config';

const GrammarContent: React.FC = observer(() => {
    const { fightSceneStore: fightScene, gameStore: game } = useGame();
    const questionIndex = fightScene.getQuestionIndex();
    const textData = scenesData[game.getSceneIndex()].textData as FightSceneTextData;
    
    const question = questions[textData.questionIDs[questionIndex]];

    const handleCorrectAnswer = () => {
        PrepareTogoToNextQuestion();
        fightScene.deincrementEnemyHearts();
    }

    const handleIncorrectAnswer = () => {
        fightScene.deincrementPlayerHearts();
    }

    const PrepareTogoToNextQuestion = () => {
        setTimeout(() => GoToNextQuestion(), config.uiResponseMillis);
    };
    
    const GoToNextQuestion = () => {
        if (questionIndex >= questions.length -1 || questionIndex >= textData.questionIDs.length -1) {
            throw new Error("No more questions");
        }

        fightScene.setQuestionIndex(questionIndex + 1);
    };

    return (
        <>
            <ItemContainer>
                <TextContent>
                    {question.question}
                </TextContent>
            </ItemContainer>
            <ItemContainer>
                <Answers 
                    answers={question.answers}
                    handleCorrectAnswer={handleCorrectAnswer}
                    handleIncorrectAnswer={handleIncorrectAnswer}
                />
            </ItemContainer>
        </>
    )
});

export default GrammarContent;
