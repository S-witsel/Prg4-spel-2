import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import mainmenubutton from '../images/mainmenubutton.png'
import retrybutton from '../images/retrybutton.png'
import startbutton from '../images/startbutton.png'

import spritesheetplayer from '../images/spritesheetplayer.png'
import spritesheetfly from '../images/fly.png'
import spritesheethats from '../images/flyhats.png'

import platformsegment from '../images/platformsegment.png'

const Resources = {
    MainMenuButton: new ImageSource(mainmenubutton),
    RetryButton: new ImageSource(retrybutton),
    StartButton: new ImageSource(startbutton),

    PlayerSpriteSheet: new ImageSource(spritesheetplayer),
    FlySpriteSheet: new ImageSource(spritesheetfly),
    HatsSpriteSheet: new ImageSource(spritesheethats),

    PlatformSegment: new ImageSource(platformsegment)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }