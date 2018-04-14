import Phaser from 'phaser';
import Player from '../sprites/player';

export default class extends Phaser.State {
  preload() {
    this.game.load.image('sky', 'assets/images/sky.png');
    this.game.load.image('ground', 'assets/images/platform.png');
    this.game.load.image('star', 'assets/images/star.png');
    this.game.load.spritesheet('dude', 'assets/spritesheet/dude.png', 32, 48);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.sprite(0, 0, 'sky');
    this.game.add.sprite(0, 0, 'star');

    let ground = this.game.add.sprite(0, this.game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    // ground.body.immovable = true;

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'dude',
    });

    // this.game.physics.arcade.enable(this.player);
    // this.player.body.bounce.y = 0.2;
    // this.player.body.gravity.y = 300;
    // this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.game.add.existing(this.player);
  }

  update() {
  }
}
