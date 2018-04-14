import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    console.log('Boot init');
    this.stage.backgroundColor = '#EDEEC9';
  }

  preload() {
    console.log('Boot preload');
    this.load.image('loaderBg', './assets/images/loader-bg.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');
  }

  create() {
    console.log('Boot create');
  }
}
