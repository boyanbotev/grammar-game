import { describe, it, expect } from "vitest";
import { getByRole, render, screen } from '@testing-library/react';

import GrammarContent from "../components/grammar-content/GrammarContent";

describe("GrammarContent", () => {
    it("renders without crashing", () => {
        render(<GrammarContent />);
    });

    // TODO: How to know which answer is correct?
    it('renders new question when answer button pressed', () => {
        render(<GrammarContent />);
    
        const questionText = screen.getByTestId('question').textContent;
            
        const buttons = screen.getAllByRole('button');
        buttons[2].click();
    
        const questionText2 = screen.getByTestId('question').textContent;
    
        expect(questionText).not.toBe(questionText2);
      });
});


