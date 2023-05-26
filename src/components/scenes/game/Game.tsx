import './Game.css';
import PixiCanvas from '../../pixi-canvas/PixiCanvas';
import GrammarContent from '../../grammar-content/GrammarContent';
import MenuButton from '../../menu-button/MenuButton';

function Game() {
    return (
        <>
            <PixiCanvas />
            <div id="UIlayer">
                <GrammarContent />
            </div>
            <MenuButton/>       
        </>
    )
} 

export default Game;