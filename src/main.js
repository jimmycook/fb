window.PIXI = require('pixi.js')
window.p2 = require('p2')
window.Phaser = require('phaser')
import MainState from './states/MainState.js'
import Start from './states/Start.js'

const game = new Phaser.Game(400, 490)

game.state.add('start', Start)
game.state.add('main', MainState)
game.state.start('start')
