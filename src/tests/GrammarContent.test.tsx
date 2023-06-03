import { describe, it, expect } from "vitest";
import { getByRole, render, screen, fireEvent } from '@testing-library/react';

import GrammarContent from "../components/grammar-content/GrammarContent";

describe("GrammarContent", () => {
    it("renders without crashing", () => {
        render(<GrammarContent />);
    });

    it('renders new question when answer button pressed', () => {
        render(<GrammarContent />);
    
        const questionText = screen.getByTestId('question').textContent;
            
        screen.getAllByRole('button').forEach(button => fireEvent.click(button));

        const newQuestionText = screen.getByTestId('question').textContent;
    
        expect(questionText).not.toEqual(newQuestionText);
      });
});
