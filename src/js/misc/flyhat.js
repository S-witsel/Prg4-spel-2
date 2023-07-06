import { Actor, Animation, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class FlyHat extends Actor{

    spritesheet
    chosenhat

    constructor(){
        super()
    }

    onInitialize(){
        let hatchoice = Math.round((Math.random() * 4)+ 0.5)

        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.HatsSpriteSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 50,
                spriteHeight: 50
            }
        })

        switch(hatchoice){
            case 1: this.chosenhat = this.spritesheet.sprites[0];break;
            case 2: this.chosenhat = this.spritesheet.sprites[1];break;
            case 3: this.chosenhat = this.spritesheet.sprites[2];break;
            case 4: this.chosenhat = this.spritesheet.sprites[3];break;
            default: this.chosenhat = this.spritesheet.sprites[0];break;
        }

        this.chosenhat.flipHorizontal = true

        this.graphics.use(this.chosenhat)

        this.pos = new Vector(0,0)
        
    }
}