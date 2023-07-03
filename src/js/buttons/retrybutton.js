import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "../resources";

export class RetryButton extends Actor{

    constructor(){
        super({width: Resources.RetryButton.width, height : Resources.RetryButton.height})
    }

    onInitialize(engine){
        this.pos = new Vector(400,200)
        this.graphics.use(Resources.RetryButton.toSprite())

        this.on('pointerdown', (event) => {
            engine.goToScene('level1')
        })
    }
}