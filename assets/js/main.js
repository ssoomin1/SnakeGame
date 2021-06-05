var game;

//게임 인스턴스 만들기
game=new Phaser.Game(600,450,Phaser.AUTO,'');
//게임 인스턴스 초기화 -> 상태 추가
game.state.add('Menu',Menu);
game.state.add('Game',Game);

game.state.start('Menu');
