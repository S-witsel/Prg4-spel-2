import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "../resources";

export class MainMenuButton extends Actor{

    constructor(){
        super({width: Resources.MainMenuButton.width, height : Resources.MainMenuButton.height})
    }

    onInitialize(engine){
        this.pos = new Vector(400,400)
        this.graphics.use(Resources.MainMenuButton.toSprite())

        this.on('pointerdown', (event) => {
            engine.goToScene('mainmenu')
        })
    }
}