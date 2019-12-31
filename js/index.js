class Loading extends Phaser.Scene {

    constructor ()
    {
        super('Loading');
    }

    preload ()
    {
        this.load.image('bg', 'assets/pics/purple-dots.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        //  This will bring the Logo Scene to the top of the Scene List
        this.scene.bringToTop('Logo');
    }

}