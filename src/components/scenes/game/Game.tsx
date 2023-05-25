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
        </>
    )
} 

export default Game;