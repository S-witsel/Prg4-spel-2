import { Actor, Vector, SpriteSheet, Animation, range } from "excalibur";
import { Animationdata } from "../misc/animationdata";
import { Resources, ResourceLoader } from '../resources.js'

export class MainMenuCharacter extends Actor{

    spritesheet
    animation
    animationflipped

    animationdata
    route
    walkingtimer

    constructor(routetype){
        super()
        
        this.animationdata = new Animationdata()
        switch(routetype){
            case 1: this.route = this.animationdata.firstanimation();break;
            case 2: this.route = this.animationdata.secondanimation();break;
            default: this.route = this.animationdata.firstanimation();break;
        }
    }

    onInitialize(){
        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                rows: 1,
                columns: 8,
                spriteWidth: 50,
                spriteHeight: 75
            }
        })

        this.animation = Animation.fromSpriteSheet(this.spritesheet, range(0,7),100)
        this.graphics.use(this.animation)

        this.walkingtimer = 0

        this.pos = new Vector(this.route[0][0], this.route[0][1])
    }

    onPreUpdate(){
        this.movetohandler(1)
        this.movetohandler(2)
        this.movetohandler(3)
        this.movetohandler(0)

        if(this.vel.x > 0){
            this.animation.flipHorizontal = false
            this.graphics.use(this.animation)
        }
        if(this.vel.x < 0){
            this.animation.flipHorizontal = true
            this.graphics.use(this.animation)
        }
    }

    movetohandler(point){
        this.actions.moveTo(new Vector(this.route[point][0], this.route[point][1]), 200)
    }
}