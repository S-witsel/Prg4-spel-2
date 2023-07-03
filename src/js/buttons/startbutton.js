import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "../resources";

export class StartButton extends Actor{

    constructor(){
        super({width: Resources.StartButton.width, height : Resources.StartButton.height})
    }

    onInitialize(engine){
        this.pos = new Vector(400,300)
        this.graphics.use(Resources.StartButton.toSprite())

        this.on('pointerdown', (event) => {
            engine.goToScene('level1')
        })
    }
}