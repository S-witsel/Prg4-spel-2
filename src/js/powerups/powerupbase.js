import { Actor, Vector } from "excalibur"
import { Platform } from "../roadelements/platform"

export class PowerupBase extends Actor{

    constructor(){
        super({radius: 50})
    }

    setspawnlocation(){
        let posx = Math.random()* 800
        let posy = Math.random()* 600
        this.pos = new Vector(posx, posy)

        this.on('collisionstart', (event) => {
            if(event.other instanceof Platform){
                posx = Math.random()* 800
                posy = Math.random()* 600
                this.pos = new Vector(posx, posy)
            }
        })
    }
}