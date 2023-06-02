import { describe as desc, it, expect, vi } from 'vitest';

desc('something truthy and something falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });   
});

import { render as renderVite, screen } from '@testing-library/react';

import Game from '../components/scenes/game/Game';

const MockedPixiCanvas = vi.mock('../components/canvas/PixiCanvas.tsx', () => ({
  __esModule: true,
  default: () => <div id="mocked-canvas" />
})); 

desc('Game', () => {
  it('renders headline', () => {
    renderVite(<Game />, {
      mocks: {
        '../components/canvas/PixiCanvas.tsx': MockedPixiCanvas,
      },
  });

    screen.debug();

    // check if App components renders headline
  });
});