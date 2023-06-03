import { describe, it, expect } from 'vitest';
// TODO: fix globals 

import { CanvasProps } from '../components/canvas/PixiCanvas';

const mockCanvasComponent: React.FC<CanvasProps> = () => {
  return (
    <div id="mock"><h1>Mock heading</h1></div>
  )
}

// TODO: fix globals 
import { getByRole, render, screen } from '@testing-library/react';

import Game from '../components/scenes/game/Game';

describe('Game', () => {
  it('renders mocked component', () => {
    render(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByText('Mock heading')).toBeInTheDocument();
  });

  it('renders question', () => {
    render(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByTestId('question')).toBeInTheDocument();
  });

  it('renders answer buttons', () => {
    render(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getAllByRole('button')).length.greaterThanOrEqual(2);
  });

  // Should be an actual button
  it('renders menu button', () => {
    render(<Game canvasComponent={mockCanvasComponent} />)
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });
});
