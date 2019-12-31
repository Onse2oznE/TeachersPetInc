let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Loading, Logo, Morty, Rick ]
};

let game = new Phaser.Game(config);