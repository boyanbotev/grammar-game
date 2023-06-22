import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CanvasProps } from '../components/canvas/PixiCanvas';
import Game from '../components/scenes/game/Game';
import { RootStore } from '../store/RootStore';
import { RootStoreContext, useGame } from '../useGame';

const rootStore = new RootStore();

const mockCanvasComponent: React.FC<CanvasProps> = ({ canvasSceneData }) => {
  const { gameStore: game } = useGame();
  game.setCanvasLoaded(true);

  return (
    <div id="mock">
      <h1>Mock heading</h1>
      <p>{canvasSceneData.sceneType}</p>
    </div>
  )
}

const nonLoadingMockCanvasComponent: React.FC<CanvasProps> = ({ canvasSceneData }) => {
  const { gameStore: game } = useGame();
  game.setCanvasLoaded(false);

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

const renderGameWithNonLoadingMockedCanvas = () => {
  render(
    <RootStoreContext.Provider value={rootStore}>
      <Game canvasComponent={nonLoadingMockCanvasComponent}/>
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

  // TESTS FIGHT SCENE INTEGRATION
  it('renders question', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByTestId('question')).toBeInTheDocument();
  });

  it('renders answer buttons', () => {
    renderGameWithMockedCanvas();
    expect(screen.getAllByRole('button')).length.greaterThanOrEqual(2);
  });

  it('will not render question if Canvas is not loaded', () => {
    renderGameWithNonLoadingMockedCanvas();
    expect(screen.queryByTestId('question')).toBeNull();
  });

  it('will not render answer buttons if Canvas is not loaded', () => {
    renderGameWithNonLoadingMockedCanvas();
    expect(screen.queryAllByRole('button').length).lessThanOrEqual(1);
  });

  // Should be an actual button
  it('renders menu button', () => {
    renderGameWithMockedCanvas();
    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });
});
