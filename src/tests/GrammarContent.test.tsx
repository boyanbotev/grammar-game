import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from '@testing-library/react';

import GrammarContent from "../components/grammar-content/GrammarContent";
import { config } from "../common/config";
import { RootStore } from '../store/RootStore';
import { RootStoreContext } from '../useGame';

const rootStore = new RootStore();

const renderGrammarContent = () => {
    render(
      <RootStoreContext.Provider value={rootStore}>
        <GrammarContent />
      </RootStoreContext.Provider>
    );
}
// TODO: now all tests are dependent on MobX working 

describe("GrammarContent", () => {
    vi.useFakeTimers();

    it('renders new question when answer button pressed', () => {
        renderGrammarContent();

        const questionText = screen.getByTestId('question').textContent;

        act(() => {
            screen.getAllByRole('button').forEach(button => fireEvent.click(button));
            vi.advanceTimersByTime(config.uiResponseMillis);
        });

        const newQuestionText = screen.getByTestId('question').textContent;
    
        expect(questionText).not.toEqual(newQuestionText);
    });
});
