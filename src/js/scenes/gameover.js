import { Label, Scene, Vector, Font,FontUnit,Color } from "excalibur";
import { RetryButton } from "../buttons/retrybutton";
import { MainMenuButton } from "../buttons/mainmenubutton";

export class GameOver extends Scene{

    label

    constructor(){
        super()
    }

    onInitialize(){

        this.label = new Label({
            text: ``,
            pos: new Vector(400,100),
            font: new Font({
                family: 'impact',
                size: 20,
                unit: FontUnit.Px,
                color:Color.White
            })
        })


        this.add(this.label)
        this.add(new RetryButton())
        this.add(new MainMenuButton())
    }

    onActivate(ctx){
        this.label.text = `Score: ${Math.round(ctx.data.score)}`
    }
}