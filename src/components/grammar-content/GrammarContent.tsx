import { useState } from 'react';

import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './answers/GrammarItemContainer';
import Button from './button/Button';
import { questions } from '../../common/consts';
import Answers from './answers/Answers';

// TODO: Grammar content come from MobX store

const GrammarContent: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <div id="grammar">
            <GrammarItemContainer>
                <Question>
                    {questions[questionIndex].question}
                </Question>
            </GrammarItemContainer>
            <GrammarItemContainer>
                {/* <Button>is</Button>
                <Button>go</Button>
                <Button>went</Button> */}
                <Answers answers={questions[questionIndex].answers}/>
            </GrammarItemContainer>
        </div>
    )
} // MobX stores question number
// Buttons uppated dynamically: a component can hold them

export default GrammarContent;