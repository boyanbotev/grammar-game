import './App.css'
import PixiCanvas from './components/canvas/PixiCanvas'
import Game from './components/scenes/game/Game'

function App() {

  return (
    <>
      <Game canvasComponent={PixiCanvas}/>
    </>
  )
}

export default App
