var snake,apple,squareSize,score,speed,updateDelay,direction,
    new_direction,addNew,cursors, scoreTextValue, speedTextValue,
    textStyle_key,textStyle_value;

var Game={
  preload:function(){
    //뱀의 몸통과 사과 이미지 두개를 preload 해놓는다.
    game.load.image('snake','./assets/images/snake.png');
    game.load.image('apple','./assets/images/apple.png');
  },

  create:function(){
    snake=[]; //snake.png를 얼마나 표시할지를 나타낼 변수
    apple={}; //사과
    squareSize=15 ; //사과/뱀의 1블럭 사이즈
    score=0; //게임점수
    speed=0; //스피드
    updateDelay=0; //뱀의 속도를 결정
    direction='right'; //시작시 뱀의 방향
    new_direction=null; //키 입력시 변경될 뱀의 방향
    addNew=false; //뱀이 사과를 먹었을 때, 새롭게 놓을지말지 정하기

    //기본 컨트롤러를 keyboard 입력으로 받겠다.
    cursors=game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor='#061f27';

    for(let i=0;i<10;i++){
      //이게 뭥미?
      snake[i]=game.add.sprite(150+i*squareSize,150,'snake');
    }

    //첫! 사과 배치
    this.generateApple();

    textStyle_key={font:"bold 14px sans-serif",fill:"#46c0f9",align:"center"};
    textStyle_value={font:"bold 14px sans-serif",fill:"#fff",align:"center"};

    //점수
    game.add.text(30,20,"SCORE",textStyle_key);
    scoreTextValue = game.add.text(90,18,score.toString(),textStyle_value);

    //스피드
    game.add.text(500,20,"SPEED",textStyle_Key);
    speedTextValue=game.add.text(558,18,speed.toString(),textStyle_Value);
  },

  update:function(){
    //추후 업뎃
  },

  generateApple:function(){
    //사과를 랜덤 위치에 놓기
    var randomX=Math.floor(Math.random()*40)*squareSize;
    var randomY=Math.floor(Math.random()*30)*squareSize;

    //add a new apple
    apple=game.add.sprite(randomX,randomY,'apple');
  }
}
