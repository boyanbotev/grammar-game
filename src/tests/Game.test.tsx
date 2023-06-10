import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CanvasProps } from '../components/canvas/PixiCanvas';
import Game from '../components/scenes/game/Game';
import { RootStore } from '../store/RootStore';
import { RootStoreContext } from '../useGame';

const rootStore = new RootStore();

const mockCanvasComponent: React.FC<CanvasProps> = ({ canvasSceneData }) => {
  return (
    <div id="mock">
      <h1>Mock heading</h1>
      <p>{canvasSceneData.sceneType}</p>
    </div>
  )
}

const renderGameWithMockedCanvas = () => {
  render(
    <RootStoreContext.Provider value={rootStore}>
      <Game canvasComponent={mockCanvasComponent}/>
    </RootStoreContext.Provider>
  );
}

describe('Game', () => {
  it('renders mocked component', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByText('Mock heading')).toBeInTheDocument();
  });

  it('renders mocked component with correct canvasData', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByText('fight')).toBeInTheDocument();
  });

  it('renders question', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByTestId('question')).toBeInTheDocument();
  });

  it('renders answer buttons', () => {
    renderGameWithMockedCanvas();
    expect(screen.getAllByRole('button')).length.greaterThanOrEqual(2);
  });

  // Should be an actual button
  it('renders menu button', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });
});
