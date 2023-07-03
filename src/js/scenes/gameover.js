import { Scene } from "excalibur";
import { RetryButton } from "../buttons/retrybutton";
import { MainMenuButton } from "../buttons/mainmenubutton";

export class GameOver extends Scene{

    constructor(){
        super()
    }

    onInitialize(){
        this.add(new RetryButton())
        this.add(new MainMenuButton())
    }
}