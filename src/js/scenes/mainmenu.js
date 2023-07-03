import { Scene, Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { StartButton } from "../buttons/startbutton.js";


export class MainMenu extends Scene{

    constructor(){
        super()
    }

    onInitialize(){
        this.add(new StartButton())
    }
}