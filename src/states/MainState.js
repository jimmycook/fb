window.PIXI = require('pixi.js')
window.p2 = require('p2')
window.Phaser = require('phaser')

export default class MainState extends Phaser.State {
  preload () {
    this.game.load.image('bird', 'assets/bird.png')
    this.game.load.image('pipe', 'assets/pipe.png')

  }

  create () {
    // Set the background color of the game world
    this.game.stage.backgroundColor = '#71c5cf'
    
    // Set up the physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.bird = this.game.add.sprite(100, 245, 'bird')
    this.game.add.sprite(400, 10, 'bird')
    // Add physics to the bird
    // Needed for: movements, gravity, collisions, etc.
    this.game.physics.arcade.enable(this.bird)

    this.bird.body.gravity.y = 1000

    // Bind the jump
    const spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceKey.onDown.add(this.jump, this)

    // Add the pipe group
    this.pipes = this.game.add.group()
    this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this); 

    this.score = 0
    this.labelScore = this.game.add.text(20, 20, '0', {
      font: '30px Ariel', file: '#ffffff'
    });
  }

  update () {
    if (this.bird.y < 0 || this.bird.y > 490) {
      this.restartGame()
    }

    this.game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this)
  }

  jump () {
    this.bird.body.velocity.y = -350
  }

  restartGame () {
    this.game.state.start('main')
  }

  addOnePipe (x, y) {
    const pipe = this.game.add.sprite(x, y, 'pipe')

    this.pipes.add(pipe)

    this.game.physics.arcade.enable(pipe)
    pipe.body.velocity.x = -200
    pipe.checkWorldBounds = true
    pipe.outOfBoundsKill = true
  }

  addRowOfPipes () {
    const hole = Math.floor(Math.random() * 5) + 1
    this.score += 1
    this.labelScore.text = this.score
    for (let i = 0; i < 8; i++) {
      if (i != hole && i != hole + 1) {
        this.addOnePipe(400, i * 60 + 10)
      }
    }
  }
}
