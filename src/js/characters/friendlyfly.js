import { Animation, SpriteSheet, range, Actor, Vector } from "excalibur";
import { Resources } from "../resources";

export class FriendlyFly extends Actor{

    spritesheet
    friendlyfly
    timeattached

    constructor(){
        super()
    }

    onInitialize(){
        this.timeattached = 0
        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.FlySpriteSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteHeight: 50,
                spriteWidth: 50
            }
        })

        let animation = Animation.fromSpriteSheet(this.spritesheet, range(0,3), 100)
        animation.flipHorizontal = true
        this.graphics.use(animation)

        this.pos = new Vector(-40, 0)
    }

    onPreUpdate(){
        this.timeattached = this.timeattached + 0.01
        this.pos = new Vector(-40, 20 * (Math.sin(this.timeattached)))
    }

    deleteItself(){
        this.unparent()
        this.kill()
    }
}