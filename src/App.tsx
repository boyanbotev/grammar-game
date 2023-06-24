import './App.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import PixiCanvas from './components/canvas/PixiCanvas';
import Game from './components/scenes/game/Game';
import { RootStore } from './store/rootStore';
import { RootStoreContext } from './useGame';

const rootStore = new RootStore();

function App() {

  return (
    <RootStoreContext.Provider value={rootStore}>
      <Game canvasComponent={PixiCanvas}/>
    </RootStoreContext.Provider>
  )
}
export default App
