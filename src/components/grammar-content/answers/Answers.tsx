import { Answer } from "../../../common/types";
import AnswerButton from "./answer-button/AnswerButton";

type AnswerProps = {
    answers: Answer[];
    goToNextQuestion: () => void;
}

const Answers: React.FC<AnswerProps> = ({ answers, goToNextQuestion }) => {
    return (
        <>
            {answers.map(answer => <AnswerButton answer={answer} goToNextQuestion={goToNextQuestion}/>)}
        </>
    )
}

export default Answers;