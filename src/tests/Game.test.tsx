import { describe as desc, it, expect, vi } from 'vitest';
import { CanvasProps } from '../components/canvas/PixiCanvas';

const mockCanvasComponent: React.FC<CanvasProps> = () => {
  return (
    <div id="mock"><h1>Mock heading</h1></div>
  )
}

import { render as renderVite, screen } from '@testing-library/react';

import Game from '../components/scenes/game/Game';

desc('Game', () => {
  it('renders Game', () => {
    renderVite(<Game canvasComponent={mockCanvasComponent}/>)
    
    // // get div by id
    // const mockedCanvas = 
  });

  screen.debug();

    // check if App components renders headline
});