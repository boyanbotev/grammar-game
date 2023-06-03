import { Answer } from "../../../common/types";
import Button from "../button/Button";

type AnswerProps = {
    answers: Answer[];
}

const Answers: React.FC<AnswerProps> = ({ answers }) => {
    const answerButtons = answers.map((answer) => <Button>{answer.content}</Button>);
    return (
        <>{answerButtons}</>
    )
}

export default Answers;