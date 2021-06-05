var Menu={
  preload:function(){
    //game 객체에서 menu 이미지를 로드한다.
    game.load.image('menu','./assets/images/menu.png');
  },

  create:function(){
    //이미지를 표시한다.
    this.add.sprite(0,0,'menu');
  },

  startGame:function(){
    //Change the state to the actual game
    this.state.start('Game');
  }
};
