import * as PIXI from 'pixi.js';
import someImage from '../images/some-image.png';

export default function() {
    const app = new PIXI.Application({ width: 800, height: 600 });

    console.log(someImage)

    document.body.appendChild(app.view);
}
