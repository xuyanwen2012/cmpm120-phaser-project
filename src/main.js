import 'pixi';
import 'p2';
import Phaser from 'phaser';

import * as States from './states';

/**
 * Override Phaser.Game
 */
class Game extends Phaser.Game {
  constructor() {
    super(1280, 720, Phaser.AUTO, 'content', null, false, false);

    Object.keys(States).forEach(state => this.state.add(state, States[state]));

    this.state.start('Boot');
  }
}

/* Start Game */
window.game = new Game();
