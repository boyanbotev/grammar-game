import { observer } from'mobx-react-lite';

import './GrammarContent.css';
import TextContent from './text-content/TextContent';
import GrammarItemContainer from './grammar-item-container/GrammarItemContainer';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';
import { useGame } from '../../useGame';
import scenesData from '../../common/scenesData';
import { FightSceneTextData } from '../../common/types';

const GrammarContent: React.FC = observer(() => {
    const { fightSceneStore: fightScene, gameStore: game } = useGame();
    const questionIndex = fightScene.getQuestionIndex();
    const textData = scenesData[game.getSceneIndex()].textData as FightSceneTextData;

    const handleCorrectAnswer = () => {
        PrepareTogoToNextQuestion();
        fightScene.deincrementEnemyHearts();
    }

    const handleIncorrectAnswer = () => {
        fightScene.deincrementPlayerHearts();
    }

    const PrepareTogoToNextQuestion = () => {
        const milis = 650;
        setTimeout(() => GoToNextQuestion(), milis);
    };
    
    const GoToNextQuestion = () => {
        if (questionIndex >= questions.length -1 || questionIndex >= textData.questionIDs.length -1) {
            throw new Error("No more questions");
        }

        fightScene.setQuestionIndex(questionIndex + 1);
    };

    return (
        <>
            <GrammarItemContainer>
                <TextContent>
                    {questions[textData.questionIDs[questionIndex]].question}
                </TextContent>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Answers 
                    answers={questions[questionIndex].answers}
                    handleCorrectAnswer={handleCorrectAnswer}
                    handleIncorrectAnswer={handleIncorrectAnswer}
                />
            </GrammarItemContainer>
        </>
    )
});

export default GrammarContent;
