import { Actor, SpriteSheet, Animation, range, Vector, CollisionType, Input, Engine, RotationType } from "excalibur";
import { Resources } from "../resources";
import { Platform } from "../roadelements/platform";

export class Player extends Actor{

    spritesheet
    runninganimation
    jumpinganimation

    runninganimationreversed
    jumpinganimationreversed

    grounded

    friends
    friendlist
    friendlyfly


    constructor(){
        super({height: 75, width: 50})
        this.body.collisionType = CollisionType.Active
        
    }

    onInitialize(engine){
        this.friends = 0
        this.friendlist = []
        this.remainingactions = 2
        this.body.bounciness = 0

        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                rows: 1,
                columns: 8,
                spriteWidth: 50,
                spriteHeight: 75
            }
        })

        this.runninganimation = Animation.fromSpriteSheet(this.spritesheet, range(0,7),100)

        this.runninganimationreversed = this.runninganimation.clone()
        this.runninganimationreversed.flipVertical = true


        this.pos = new Vector(300,300)
        this.grounded = 0



        this.on('collisionstart', (event) => {
            if(event.other instanceof Platform){
                this.grounded = this.grounded + 1
            }
        })
        this.on('collisionend', (event) => {
            if(event.other instanceof Platform){
                this.grounded = this.grounded - 1
            }
        })
        
        this.on('exitviewport', (event) => {
            engine.goToScene("gameover")
        })
    }

    onPreUpdate(engine){

        if(this.pos.x < 300){
            this.vel = new Vector(100, this.vel.y)
        } else {
            this.vel = new Vector(0, this.vel.y)
        }

        if(engine.input.keyboard.wasPressed(Input.Keys.ShiftLeft)) {
            if(this.grounded > 0){
                engine.currentScene.flipgravity()
                this.remainingactions = this.remainingactions - 1
            }
        }

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            if(this.grounded > 0){
                this.remainingactions = this.remainingactions - 1
                if(engine.currentScene.gravityflipped){
                    this.vel.y = 800
                } else {
                    this.vel.y = -800
                }
            }
        }

        if(this.grounded > 0){
            if (engine.currentScene.gravityflipped){
                this.graphics.use(this.runninganimationreversed)
            
            } else {
                this.graphics.use(this.runninganimation)

            }
        } else {
            if (engine.currentScene.gravityflipped){
                this.graphics.use(this.runninganimationreversed)
            
            } else {
                this.graphics.use(this.runninganimation)
            }
        }
    }
}