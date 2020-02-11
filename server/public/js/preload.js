class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload(){
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(290, 350, 320, 50);


    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: 380 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
        }
      });
    
      loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
        x: width / 2,
        y: 380 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
    
      percentText.setOrigin(0.5, 0.5);

    this.load.html('nameform', 'asset/text/nameform.html');
    // var assetText = this.make.text({
    //     x: width / 2,
    //     y: height / 2 + 50,
    //     text: '',
    //     style: {
    //       font: '18px monospace',
    //       fill: '#ffffff'
    //       }
    //     });
    //   assetText.setOrigin(0.5, 0.5);

    // this.load.image('logo', 'asset/logo.png');
    // this.load.image('btn', 'asset/avatarCreate/btn1.png')
    // this.load.image('border', 'asset/avatarCreate/container.png');
    this.load.image('bg', 'asset/avatarCreate/sky.png');
    this.load.image('charPlatf', 'asset/avatarCreate/platform.png');
    // this.load.image('eyecon', 'asset/avatarCreate/eye.png');


    this.load.image('eyes1', 'asset/avatarCreate/eyes/eye1.png');
    this.load.image('eyes2', 'asset/avatarCreate/eyes/eye2.png');
    this.load.image('eyes3', 'asset/avatarCreate/eyes/eye3.png');
    this.load.image('eyes4', 'asset/avatarCreate/eyes/eye4.png');
    this.load.image('eyes5', 'asset/avatarCreate/eyes/eye5.png');
    this.load.image('eyes6', 'asset/avatarCreate/eyes/eye6.png');
    this.load.image('eyes7', 'asset/avatarCreate/eyes/eye7.png');
    this.load.image('eyes8', 'asset/avatarCreate/eyes/eye8.png');
    this.load.spritesheet('eyes9', 'asset/avatarCreate/eyes/eye9.png',{frameWidth: 297, frameHeight: 397});
    
    this.load.image('animal1', 'asset/avatarCreate/bunny.png');
   this.load.image('animal2', 'asset/avatarCreate/animals/animal2.png');
   this.load.image('animal3', 'asset/avatarCreate/animals/animal3.png');
   this.load.image('animal4', 'asset/avatarCreate/animals/animal4.png');
    
    //   for (var i = 0; i < 500; i++) {
    //     this.load.image('logo'+i, 'logo.png');

    //     this.load.image('bg'+i, 'loadoutBG.jpg');
        
    //     this.load.image('eyes1'+i, 'eye1.png');
    //     this.load.image('eyes2'+i, 'eye2.png');
    //     this.load.image('eyes3'+i, 'eye3.png');
    //     this.load.image('eyes4'+i, 'eye4.png');
    //     this.load.image('eyes5'+i, 'eye5.png');
    //     this.load.image('eyes6'+i, 'eye6.png');
    //     this.load.image('eyes7'+i, 'eye7.png');
    //     this.load.image('eyes8'+i, 'eye8.png');
    //     this.load.image('eyes9'+i, 'eye9.png');
    
    //     this.load.image('animal1'+i, 'animal1.png');
    //     this.load.image('animal2'+i, 'animal2.png');
    //     this.load.image('animal3'+i, 'animal3.png');
    //     this.load.image('animal4'+i, 'animal4.png');
    // }

    this.load.on('progress', function (value) {
    
    percentText.setText(parseInt(value * 100) + '%');
    // progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(300, 360, 300 * value, 30);
});
            
    // this.load.on('fileprogress', function (file) {
    //   assetText.setText('Loading asset: ' + file.src);
    // });
 
    // this.load.on('complete', function () {
    //   console.log('complete');
    //   progressBar.destroy();
    //   progressBox.destroy();

    //   loadingText.destroy();
    //   percentText.destroy();
  
    // });
  }

  create(){

    this.add.image(440,250, 'logo');
    this.scene.start('avatarCreate');    
  }
}