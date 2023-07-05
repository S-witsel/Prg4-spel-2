import { Animation, SpriteSheet, range } from "excalibur";
import { PowerupBase } from "./powerupbase";
import { Resources } from "../resources";
import { Player } from "../characters/player";

export class PowerUpFly extends PowerupBase{

    spritesheet

    constructor(){
        super()
    }

    onInitialize(engine){
        this.setspawnlocation()

        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.FlySpriteSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteHeight: 50,
                spriteWidth: 50
            }
        })

        this.graphics.use(Animation.fromSpriteSheet(this.spritesheet, range(0,3), 100))

        this.on('collisionstart', (event) => {
            if(event.other instanceof Player){
                engine.currentScene.player.friends++
                
                this.kill()
            }
        })
    }
}