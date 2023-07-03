import { Actor, CollisionType, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "../resources";

export class Platform extends Actor{

    posx
    posy

    width

    constructor(posx, posy, width){
        super({width: width, height: 50})

        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0
        this.body.bounciness = 0

        this.posx = posx
        this.posy = posy
        this.width = width
    }

    onInitialize(){
        this.pos = new Vector(this.posx, this.posy)
        this.createGrapics()     
    }

    createGrapics(){
        let segmentsamount = this.width / 50
        let segment = Resources.PlatformSegment.toSprite()
        let startposx = -25
        let group = new GraphicsGroup({
            members: []
        })

        for(let i = 0; i < segmentsamount; i++){
            group.members.push({graphic: segment, pos: new Vector(startposx + (i * 50) + 25, 0)})
        }
        
        this.graphics.add(group)
        
    }
}