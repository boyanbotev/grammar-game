import './Game.css';
import PixiCanvas from '../../pixi-canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';

function Game() {
    return (
        <>
            <PixiCanvas />
            <div id="UIlayer">
                <GrammarContent />
            </div>
            {/* how to get UI to float on a separate layer to canvas? */}
        </>
    )
} 

export default Game;