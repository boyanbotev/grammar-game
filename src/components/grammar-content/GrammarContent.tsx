import { observer } from'mobx-react-lite';

import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './grammar-item-container/GrammarItemContainer';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';
import { useGame } from '../../useGame';
import scenesData from '../../common/scenesData';
import { FightSceneTextData } from '../../common/types';

const GrammarContent: React.FC = observer(() => {
    const { fightScene, game } = useGame();
    const questionIndex = fightScene.getQuestionIndex();
    const textData = scenesData[game.getSceneIndex()].textData as FightSceneTextData;

    const handleCorrectAnswer = () => {
        PrepareTogoToNext();
        fightScene.deincrementEnemyHearts();
    }

    const handleIncorrectAnswer = () => {
        fightScene.deincrementPlayerHearts();
    }

    const handleLastQuestion = () => {
        game.incrementSceneIndex();
    }

    const PrepareTogoToNext = () => {
        const milis = 650;
        setTimeout(() => GoToNext(), milis);
    };
    
    const GoToNext = () => {
        if (questionIndex >= questions.length -1 || questionIndex >= textData.questionIndexes.length -1) {
            handleLastQuestion();
            return;
        }

        fightScene.setQuestionIndex(questionIndex + 1);
    };

    return (
        <div id="grammar">
            <GrammarItemContainer>
                <Question>
                    {questions[textData.questionIndexes[questionIndex]].question}
                </Question>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Answers 
                    answers={questions[questionIndex].answers}
                    handleCorrectAnswer={handleCorrectAnswer}
                    handleIncorrectAnswer={handleIncorrectAnswer}
                />
            </GrammarItemContainer>
        </div>
    )
});

export default GrammarContent;
