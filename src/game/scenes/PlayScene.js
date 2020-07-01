import {
  Scene
} from 'phaser'

let player = null;
let cursor = null;
export default class PlayScene extends Scene {
  constructor() {
    super({
      key: 'PlayScene'
    })
  }

  create() {
    this.add.image(400, 300, 'sky')

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(50, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(568, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(0, 250, 'ground');
    this.platforms.create(750, 220, 'ground');


    
    this.player = this.physics.add.sprite(100, 450, 'bomb');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);

    this.cursors = this.input.keyboard.createCursorKeys();


  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}