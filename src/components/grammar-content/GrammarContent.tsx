import { observer } from'mobx-react-lite';

import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './grammar-item-container/GrammarItemContainer';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';
import { useGame } from '../../useGame';

const GrammarContent: React.FC = observer(() => {
    const { game } = useGame();
    const questionIndex = game.getQuestionIndex();

    const handleCorrectAnswer = () => {
        goToNextQuestion();
        game.deincrementEnemyHearts();
    }

    const handleIncorrectAnswer = () => {
        game.deincrementPlayerHearts();
    }

    const goToNextQuestion = () => {
        const milis = 650;
        setTimeout(() => incrementQuestionIndex(), milis);
    };
    
    const incrementQuestionIndex = () => {
        if (questionIndex >= questions.length -1) return;

        game.setQuestionIndex(questionIndex + 1);
    };

    return (
        <div id="grammar">
            <GrammarItemContainer>
                <Question>
                    {questions[questionIndex].question}
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
