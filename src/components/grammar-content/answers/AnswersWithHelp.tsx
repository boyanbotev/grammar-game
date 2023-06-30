import { Answer } from "../../../common/types";
import AnswerButton from "./answer-button/AnswerButton";
import HelperArrow from "./helper-arrow/HelperArrow";

type AnswerProps = {
    answers: Answer[];
    handleCorrectAnswer: () => void;
    handleIncorrectAnswer: () => void;
}

const AnswersWithHelp: React.FC<AnswerProps> = ({ answers, handleCorrectAnswer, handleIncorrectAnswer }) => {
    return (
        <>
            {
                answers.map(answer => {
                    if (answer.correct === true) {
                        return (
                            <HelperArrow>
                            <AnswerButton
                                answer={answer}
                                handleCorrectAnswer={handleCorrectAnswer} 
                                handleIncorrectAnswer={handleIncorrectAnswer}
                            />
                            </HelperArrow>
                        );
                    } else return (
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

export default AnswersWithHelp;