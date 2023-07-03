import { Physics, Scene, Vector } from "excalibur";
import { Player } from "../characters/player.js";
import { Platform } from "../roadelements/platform.js";
import { RoadSegment1 } from "../roadsegment/roadsegment1.js";
import { RoadSegment2 } from "../roadsegment/roadsegment2.js";
import { RoadSegment3 } from "../roadsegment/roadsegment3.js";

export class Level1 extends Scene{

    player

    gravityflipped

    scrollingspeed
    levelsegmentkilled
    levelsegments

    constructor(){
        super()
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,800)
    }

    onInitialize(){
        this.scrollingspeed = -200
        this.levelsegments = []
        this.gravityflipped = false
        this.levelsegmentkilled = false

        this.player = new Player()
        this.add(this.player)
    }

    onActivate(){
        this.scrollingspeed = -200
        this.levelsegmentkilled = false
        this.player.pos = new Vector(300,300)

        this.levelsegments.push(new RoadSegment1(this.scrollingspeed))
        this.add(this.levelsegments[0])

        this.levelsegments.push(new RoadSegment2(this.scrollingspeed))
        this.levelsegments[1].pos = new Vector(800,0)
        this.add(this.levelsegments[1])

        this.levelsegments.push(new RoadSegment3(this.scrollingspeed))
        this.levelsegments[2].pos = new Vector(1600,0)
        this.add(this.levelsegments[2])
    }

    onDeactivate(){
        this.levelsegments.forEach(element => {
            element.kill()
        });
        this.levelsegments = []
    }

    onPreUpdate(){
        if(this.levelsegmentkilled){
            this.levelsegments.shift()
            this.levelsegments.push(new RoadSegment1(this.scrollingspeed))

            let randomnumber = Math.round(Math.random() * 3)

            switch(randomnumber){
                case 1: this.levelsegments.push(new RoadSegment1(this.scrollingspeed));break;
                case 2: this.levelsegments.push(new RoadSegment2(this.scrollingspeed));break;
                case 3: this.levelsegments.push(new RoadSegment3(this.scrollingspeed));break;
            }
            this.levelsegments[2].pos = new Vector(1600,0)
            this.add(this.levelsegments[2])
            this.levelsegmentkilled = false
        }
    }

    flipgravity(){
        this.gravityflipped = !this.gravityflipped

        if(this.gravityflipped){
            Physics.gravity = new Vector(0, -800)
        } else {
            Physics.gravity = new Vector(0, 800)
        }
    }
}