import { describe as desc, it, expect } from 'vitest';
// TODO: fix globals 

import { CanvasProps } from '../components/canvas/PixiCanvas';

const mockCanvasComponent: React.FC<CanvasProps> = () => {
  return (
    <div id="mock"><h1>Mock heading</h1></div>
  )
}

// TODO: fix globals 
import { getByRole, render as renderVite, screen } from '@testing-library/react';

import Game from '../components/scenes/game/Game';

desc('Game', () => {
  it('renders mocked component', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByText('Mock heading')).toBeInTheDocument();
  });

  it('renders question', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByTestId('question')).toBeInTheDocument();
  });

  it('renders answer buttons', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getAllByRole('button')).length.greaterThanOrEqual(2);
  });

  // Should be an actual button
  it('renders menu button', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent} />)
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });

  it('renders new question when answer button pressed', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);

    const questionText = screen.getByTestId('question').textContent;
        
    const buttons = screen.getAllByRole('button');
    buttons[0].click();

    const questionText2 = screen.getByTestId('question').textContent;

    expect(questionText).not.toBe(questionText2);
  })
});
