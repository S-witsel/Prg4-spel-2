import { Actor, Vector } from "excalibur";
import { Platform } from "../roadelements/platform";
import { RoadSegmentBase } from "./roadsegmentbase";
import { PowerUpFly } from "../powerups/powerupfly";

export class RoadSegment4 extends RoadSegmentBase{

    constructor(){
        super()
    }

    onInitialize(){
        this.platforms.push(new Platform(400, 300, 800))

        this.addChild(new PowerUpFly())

        this.platforms.forEach(element => {
            this.addChild(element)
        });
    }
    
    onPreUpdate(engine){
        this.exitscreenhandler(engine)
        this.scrollspeedhandler(engine.currentScene.scrollingspeed)
    }
    
}