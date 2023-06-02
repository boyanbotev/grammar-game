import './GrammarContent.css';
import Question from './question/Question';
import GrammarItemContainer from './answers/GrammarItemContainer';
import Button from './button/Button';

// TODO: Grammar content come from MobX store

const GrammarContent: React.FC = () => {
    return (
        <div id="grammar">
            <GrammarItemContainer>
                <Question>
                    Yesterday, Louise ____ to the park after dinner.
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