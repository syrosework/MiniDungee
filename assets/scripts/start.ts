import * as PIXI from 'pixi.js';
import lolbled from '../images/lolbled.png';

export default function() {
    const app = new PIXI.Application({ width: 800, height: 600 });

    console.log(lolbled)

    document.body.appendChild(app.view);
}
