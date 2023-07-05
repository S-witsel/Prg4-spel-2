import { Actor, Vector } from "excalibur";

export class RoadSegmentBase extends Actor{

    platforms

    constructor(){
        super({width: 800, height: 600})
        this.platforms = []
    }

    exitscreenhandler(engine){
        if(this.pos.x < - 800){
            this.kill()
            engine.currentScene.levelsegmentkilled = true
        }
    }

    scrollspeedhandler(speed){
        this.vel = new Vector(speed,0)
    }
}