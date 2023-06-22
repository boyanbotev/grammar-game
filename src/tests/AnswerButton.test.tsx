import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, act, screen } from "@testing-library/react";

import AnswerButton from "../components/grammar-content/answers/answer-button/AnswerButton";
import { Answer } from "../common/types";
import config  from "../common/config";

describe("AnswerButton", () => {
    vi.useFakeTimers();

    it("should trigger correct method when clicked and answer is correct", () => {
        const answer = {
            content: "",
            correct: true,
        } satisfies Answer;

        const mockCorrectFunction = vi.fn();
        const mockIncorrectFunction = vi.fn();
        render(<AnswerButton answer={answer} handleCorrectAnswer={mockCorrectFunction} handleIncorrectAnswer={mockIncorrectFunction}/>);

        act(() => {
            screen.getAllByRole('button').forEach(button => fireEvent.click(button));
            vi.advanceTimersByTime(config.uiResponseMillis);
        });
        expect(mockCorrectFunction).toHaveBeenCalledTimes(1);
        expect(mockIncorrectFunction).toHaveBeenCalledTimes(0);
    });

    it("should trigger incorrect method when clicked and answer is incorrect", () => {
        const answer = {
            content: "",
            correct: false,
        } satisfies Answer;

        const mockCorrectFunction = vi.fn();
        const mockIncorrectFunction = vi.fn();
        render(<AnswerButton answer={answer} handleCorrectAnswer={mockCorrectFunction} handleIncorrectAnswer={mockIncorrectFunction}/>);

        act(() => {
            screen.getAllByRole('button').forEach(button => fireEvent.click(button));
            vi.advanceTimersByTime(config.uiResponseMillis);
        });
        expect(mockCorrectFunction).toHaveBeenCalledTimes(0);
        expect(mockIncorrectFunction).toHaveBeenCalledTimes(1);
    });
});