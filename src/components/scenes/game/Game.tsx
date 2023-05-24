import './Game.css';
import PixiCanvas from '../../pixi-canvas/PixiCanvas';

function Game() {
    return (
        <>
            <PixiCanvas />
            <button>Do something</button>
            {/* how to get UI to float on a separate layer to canvas? */}
        </>
    )
} 

export default Game;