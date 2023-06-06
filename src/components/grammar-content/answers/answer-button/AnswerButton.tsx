import { useState } from "react";

import Button from "../../button/Button";
import { Answer } from "../../../../common/types";
import './AnswerButton.css';
import { useGame } from "../../../../useGame";

type AnswerProps = {
    answer: Answer;
    goToNextQuestion: () => void;
}
// TODO: remove unnecessary prop drilling

const AnswerButton: React.FC<AnswerProps> = ({ answer, goToNextQuestion }) => {
    const [ animation, setAnimation ] = useState<string>("");
    const { game } = useGame();
    
    const handleButtonPressed = () => {
        if (animation != "") return;

        if (answer.correct) {
            triggerCorrectAnimation();
            goToNextQuestion();
            game.deincrementEnemyHearts();

        } else {
            triggerIncorrectAnimation();
            
            // TODO: IS this the place for this?
            game.deincrementPlayerHearts();
        }

        resetAnimation(650);
    }

    const triggerCorrectAnimation = () => {
        setAnimation("correct-animation")
    };

    const triggerIncorrectAnimation = () => {
        setAnimation("incorrect-animation");
    };

    const resetAnimation = (milis: number) => {
        setTimeout(() => setAnimation(""), milis);
    }

    return (
        <Button onClick={handleButtonPressed} className={animation}>
            {answer.content}
        </Button>
    )
}

export default AnswerButton;
