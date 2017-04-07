window.PIXI = require('pixi.js')
window.p2 = require('p2')
window.Phaser = require('phaser')
import MainState from './states/MainState.js'

const game = new Phaser.Game(400, 490)

game.state.add('main', MainState)
game.state.start('main')
