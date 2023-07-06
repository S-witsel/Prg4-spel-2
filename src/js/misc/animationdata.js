export class Animationdata{

    animation1
    animation2

    constructor(){

        this.animation1 = [[100,100],[700,100],[700,500],[100,500]]
        this.animation2 = [[700,100],[100,500],[100,100],[700,500]]
    }

    firstanimation(){
        return this.animation1
    }

    secondanimation(){
        return this.animation2
    }
}