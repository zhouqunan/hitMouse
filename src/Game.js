/*
* name;
*/
var Game = (function () {
    function Game() {
        Game.super(this); //继承父类
        this.mouse = new Array();
        this.hitCallBackHd = Laya.Handler.create(this,this.setScore,null,false);
        for(var i = 0;i<9;i++){  
            var item = this.getChildByName('item'+i);
            this.mouse[i] = new Mouse(item.getChildByName('normal'),item.getChildByName('hitted'),20,this.hitCallBackHd);
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
    }
    //绑定ui页面
    Laya.class(Game, "Game", gameUI);
    var _proto = Game.prototype;
    _proto.mouseCreate = function(){
        //每秒时间条减少，分母为秒数
        this.timer.value -= 1/10;
        //时间到，结束游戏
        if(this.timer.value <= 0){
            this.gameOver();
            return;
        }
        var num = Math.floor(Math.random()*9);
        //显示地鼠
        this.mouse[num].show();
        
    }
    _proto.gameStart = function(){
        this.timer.value = 1;
        this.score = 0;
        
        this.hammer.start();   
        Laya.timer.loop(2000,this,this.mouseCreate);

    }
    _proto.gameOver = function(){
        //清除定时器
        Laya.timer.clear(this,this.mouseCreate);
        this.hammer.end();
        this.hammer.visvible = false;
    }
    _proto.setScore = function(type){
        this.score += (type == 1)? -100:100);
        if(this.score <=0 ) this.score = 0;
        console.log(this.score);
        this.updateScore();
    }
    _proto.updateScore = function(){
        this.data = {};
        this.updateNum = this.score;
        for(var i=9;i>=0;i--){
            this.data['item'+i] = {index:Math.floor(this.updateNum%10)};
            this.updateNum /= 10;
        }
        console.log(this.data);
        this.sorcesNum.dataSource = this.data;
    }
    return Game;
}());