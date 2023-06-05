import './App.css';
import PixiCanvas from './components/canvas/PixiCanvas';
import Game from './components/scenes/game/Game';
import { RootStore } from './store/RootStore';
import { RootStoreContext } from './useGame';

const rootStore = new RootStore();

function App() {

  return (
    <RootStoreContext.Provider value={rootStore}>
      <Game canvasComponent={PixiCanvas}/>
    </RootStoreContext.Provider>
  )
}
// TODO: Test rootstore
export default App
