import { Answer } from "../../../common/types";
import Button from "../button/Button";

type AnswerProps = {
    answers: Answer[];
    goToNextQuestion: React.Dispatch<React.SetStateAction<number>>;
}

// TODO: Button reacts with animation to correct or incorrect answer click

const Answers: React.FC<AnswerProps> = ({ answers, goToNextQuestion }) => {
    const answerButtons = answers.map((answer) => {
        return <Button onClick={answer.correct ? goToNextQuestion : undefined}>
            {answer.content}
        </Button>
    });

    return (
        <>{answerButtons}</>
    )
}

export default Answers;