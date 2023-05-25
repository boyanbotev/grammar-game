import './GrammarContent.css';
import Question from './question/Question';
import Answers from './answers/Answers';
import Button from './button/Button';

function GrammarContent() {
    return (
        <div id="grammar">
            <Answers>
                <Question>
                    Yesterday, Louise ___ to the park.
                </Question>
            </Answers>
            <Answers>
                <Button>is</Button>
                <Button>go</Button>
                <Button>went</Button>
            </Answers>
        </div>
    )
}

export default GrammarContent;