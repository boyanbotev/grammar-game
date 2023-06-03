import { useState } from 'react';

import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './answers/GrammarItemContainer';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';

// TODO: Grammar content come from MobX store

const GrammarContent: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    const incrementQuestionIndex = () => setQuestionIndex((prevIndex) => prevIndex + 1);

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
                    goToNextQuestion={incrementQuestionIndex}
                />
            </GrammarItemContainer>
        </div>
    )
} // MobX stores question number
// Buttons uppated dynamically: a component can hold them

export default GrammarContent;