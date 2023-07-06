import { Scene, Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { StartButton } from "../buttons/startbutton.js";
import { MainMenuCharacter } from "../characters/menucharacter.js";


export class MainMenu extends Scene{

    constructor(){
        super()
    }

    onInitialize(){
        this.add(new StartButton())
        this.add(new MainMenuCharacter(1))
        this.add(new MainMenuCharacter(2))
    }
}