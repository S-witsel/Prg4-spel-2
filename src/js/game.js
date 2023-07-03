import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainMenu } from './scenes/mainmenu'
import { Level1 } from './scenes/level1'
import { GameOver } from './scenes/gameover'

export class Game extends Engine {

    constructor() {
        
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
        //this.showDebug(true)
    }

    startGame() {
        
        this.addScene("mainmenu", new MainMenu())
        this.addScene("level1", new Level1())
        this.addScene("gameover", new GameOver())

        this.goToScene("mainmenu")
    }
}

new Game()
