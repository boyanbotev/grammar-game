import { describe as desc, it, expect } from 'vitest';
import { CanvasProps } from '../components/canvas/PixiCanvas';

const mockCanvasComponent: React.FC<CanvasProps> = () => {
  return (
    <div id="mock"><h1>Mock heading</h1></div>
  )
}

import { render as renderVite, screen } from '@testing-library/react';

import Game from '../components/scenes/game/Game';

desc('Game', () => {
  it('renders Game without error', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>)
  });

  it('renders mocked Component', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByText('Mock heading')).toBeInTheDocument();
  });

  it('renders question', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getByTestId('question')).toBeInTheDocument();
  });

  it('renders answer buttons', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>);
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

});