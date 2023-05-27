import { Container } from "pixi.js";
import imgUrl from '../../assets/fight-bear.jpg';
import { Background } from "../pixi-components/background";

export class GameScene extends Container {
    constructor() {
        super();
        new Background(imgUrl, this);
    }
}