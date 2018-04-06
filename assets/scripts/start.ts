import * as PIXI from 'pixi.js';
import someImage from '../images/character.png';

export default function() {

    let app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});

    document.body.appendChild(app.view);

    let sprite = PIXI.Sprite.fromImage(someImage);

// Set the initial position
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

    app.stage.addChild(sprite);



}
