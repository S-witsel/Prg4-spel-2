import { Font, FontUnit, Label, Physics, Scene, Vector, Color } from "excalibur";
import { Player } from "../characters/player.js";
import { Platform } from "../roadelements/platform.js";
import { RoadSegment1 } from "../roadsegment/roadsegment1.js";
import { RoadSegment2 } from "../roadsegment/roadsegment2.js";
import { RoadSegment3 } from "../roadsegment/roadsegment3.js";
import { RoadSegment4 } from "../roadsegment/roadsegment4.js";

export class Level1 extends Scene{

    player

    score
    scoremultiplier
    scorelabel

    gravityflipped

    scrollingspeed
    scrollingspeedCD

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

        this.score = 0

        this.scorelabel = new Label({
            text: `Score: ${this.score}, Multiplier: ${this.scoremultiplier}`,
            pos: new Vector(600,100),
            font: new Font({
                family: 'impact',
                size: 20,
                unit: FontUnit.Px,
                color:Color.White
            })
        })

        this.add(this.scorelabel)
    }

    onActivate(){

        this.player.deletefriend()
        
        this.player.friendlyfly = 0
        this.player.friends = 0
        this.player.friendlist = []

        this.score = 0
        this.scoremultiplier = 1
        this.scrollingspeedCD = 0
        this.scrollingspeed = -200
        this.gravityflipped = true
        this.flipgravity()

        this.scrollingspeed = -200
        this.levelsegmentkilled = false
        this.player.pos = new Vector(300,300)
        this.player.vel = new Vector(0,0)

        this.levelsegments.push(new RoadSegment1())
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

    onPreUpdate(engine,delta){
        this.updatescore(1)
        this.updatescrollspeed(engine,delta)

        if(this.levelsegmentkilled){
            this.levelsegments.shift()
            this.levelsegments.push(new RoadSegment1())

            let randomnumber = Math.round(Math.random() * 4 + 0.5)

            switch(randomnumber){
                case 1: this.levelsegments.push(new RoadSegment1());break;
                case 2: this.levelsegments.push(new RoadSegment2(this.scrollingspeed));break;
                case 3: this.levelsegments.push(new RoadSegment3(this.scrollingspeed));break;
                case 4: this.levelsegments.push(new RoadSegment4(this.scrollingspeed));break;
            }
            this.levelsegments[2].pos = new Vector(1600,0)
            this.add(this.levelsegments[2])
            this.levelsegmentkilled = false
        }
    }

    flipgravity(){
        this.gravityflipped = !this.gravityflipped

        if(this.gravityflipped){
            Physics.gravity = new Vector(0, -1200)
        } else {
            Physics.gravity = new Vector(0, 1200)
        }
    }

    updatescrollspeed(engine, delta){
        if(this.scrollingspeedCD > 3000){
            this.scrollingspeed = this.scrollingspeed - 20
            this.scrollingspeedCD = 0
        } else {
            this.scrollingspeedCD = this.scrollingspeedCD + delta
        }
    }

    updatescore(multiplier){
        this.scoremultiplier = this.player.friends * 0.1 + 1
        this.score = this.score + 0.01 * this.scoremultiplier
        this.scorelabel.text = `Score: ${Math.round(this.score)} Multiplier: ${this.scoremultiplier}`
    }


    
}