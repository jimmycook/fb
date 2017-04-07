window.PIXI = require('pixi.js')
window.p2 = require('p2')
window.Phaser = require('phaser')

export default class Start extends Phaser.State {
  preload () {
    
  }

  create () {
    // Set the background color of the game world
    this.game.stage.backgroundColor = '#71c5cf'

    const spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceKey.onDown.add((e) => this.game.state.start('main'))

    this.label = this.game.add.text(20, 20, 'Press Space to Play', {
      font: '30px Ariel', color: '#ffffff'
    });
  }

  update () {
   
  }  
}
