class avatarCreate extends Phaser.Scene {
  constructor() {
    super("avatarCreate");
  }

  create(){
    // var eyes, body, color;    
     
    this.add.image(450,275,'bg');
    this.add.image(190,480, 'charPlatf');
    this.add.image(180,300, 'animal1');
    
    // var input = game.add.inputField(10, 90);
    // this.add.image(450,170, 'btn');
    // this.add.image(450,254, 'btn');
    // this.add.image(450,334, 'btn');
    // this.add.image(450,414, 'btn');
    // this.add.image(650,300,'border'); 
    // this.add.image(440,170, 'eyecon');
    // this.add.text(600, 120, 'Eyes', { fontFamily: '"Roboto Condensed"', font: "40px Arial", fill: "#000000" });    
  	// tiles = this.physics.add.staticGroup();
  	// arrow = this.physics.add.staticGroup();
  	// text = this.physics.add.staticGroup();
     // var keys = this.textures.getTextureKeys();

  // for (var i = 0; i < keys.length; i++)
  //   {
  //       var x = Phaser.Math.Between(0, 900);
  //       var y = Phaser.Math.Between(0, 600);

  //       this.add.image(x, y, keys[i]);
  //   }
  
    // var text = this.add.text(400, 10, 'Nickname', { fontFamily: '"Roboto Condensed"',font: "40px Arial",color: 'black', fontSize: '20px '});
    // var inputText = this.getChildByName('name');




  }
}