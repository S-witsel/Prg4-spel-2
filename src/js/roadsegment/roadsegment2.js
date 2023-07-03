import { Actor, Vector } from "excalibur";
import { Platform } from "../roadelements/platform";

export class RoadSegment2 extends Actor{

    scrollingspeed

    constructor(scrollingspeed){
        super({width: 800, height: 600})
        this.scrollingspeed = scrollingspeed
    }

    onInitialize(){
        this.addChild(new Platform(400, 25, 800))
        this.vel = new Vector(this.scrollingspeed,0)

    }

    onPreUpdate(engine){
        if(this.pos.x < - 800){
            this.kill()
            engine.currentScene.levelsegmentkilled = true
        }
    }
    
}