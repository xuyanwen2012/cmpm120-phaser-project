import Phaser from 'phaser';

export default class Player extends Phaser.Sprite {
  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);

    this.anchor.setTo(0.5, 0.5);
    // this.game.physics.p2.enable(this);
  }

  update() {

  }
}
