import { useState } from "react";

import Button from "../../button/Button";
import { Answer } from "../../../../common/types";
import './AnswerButton.css';

type AnswerProps = {
    answer: Answer;
    handleCorrectAnswer: () => void;
    handleIncorrectAnswer: () => void;
}

// rename?
const AnswerButton: React.FC<AnswerProps> = ({ answer, handleCorrectAnswer, handleIncorrectAnswer }) => {
    const [ animation, setAnimation ] = useState<string>("");
    
    const handleButtonPressed = () => {
        if (animation != "") return;

        if (answer.correct) {
            triggerCorrectAnimation();
            handleCorrectAnswer();
        } else {
            triggerIncorrectAnimation();
            handleIncorrectAnswer();
        }

        resetAnimationAfterMillis(650);
    }

    const triggerCorrectAnimation = () => {
        setAnimation("correct-animation")
    };

    const triggerIncorrectAnimation = () => {
        setAnimation("incorrect-animation");
    };

    const resetAnimationAfterMillis = (milis: number) => {
        setTimeout(() => setAnimation(""), milis);
    }

    return (
        <Button onClick={handleButtonPressed} className={animation}>
            <b>{answer.content}</b>
        </Button>
    )
}

export default AnswerButton;
