import { useState } from 'react';

import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './grammar-item-container/GrammarItemContainer';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';

// TODO: Grammar content come from MobX store

const GrammarContent: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    const incrementQuestionIndex = () => {
        if (questionIndex >= questions.length -1) return;

        setQuestionIndex((prevIndex) => prevIndex + 1)
    };

    const goToNextQuestion = () => {
        const milis = 650;
        setTimeout(() => incrementQuestionIndex(), milis);
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
                    goToNextQuestion={goToNextQuestion}
                />
            </GrammarItemContainer>
        </div>
    )
} // MobX stores question number
// Buttons updated dynamically: a component can hold them

export default GrammarContent;