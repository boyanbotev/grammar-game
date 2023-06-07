import { Answer } from "../../../common/types";
import AnswerButton from "./answer-button/AnswerButton";

type AnswerProps = {
    answers: Answer[];
    handleCorrectAnswer: () => void;
    handleIncorrectAnswer: () => void;
}

const Answers: React.FC<AnswerProps> = ({ answers, handleCorrectAnswer, handleIncorrectAnswer }) => {
    return (
        <>
            {
                answers.map(answer => {
                    return (
                        <AnswerButton
                            answer={answer}
                            handleCorrectAnswer={handleCorrectAnswer} 
                            handleIncorrectAnswer={handleIncorrectAnswer}
                        />
                    )
                })
            }
        </>
    )
}

export default Answers;