import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './answers/GrammarItemContainer';
import Button from './button/Button';

function GrammarContent() {
    return (
        <div id="grammar">
            <GrammarItemContainer>
                <Question>
                    Yesterday, Louise ___ to the park.
                </Question>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Button>is</Button>
                <Button>go</Button>
                <Button>went</Button>
            </GrammarItemContainer>
        </div>
    )
}

export default GrammarContent;