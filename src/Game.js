/*
* name;
*/
var Game = (function () {
    function Game() {
        Game.super(this); //继承父类
        this.mouse = new Array();
        for(var i = 0;i<9;i++){  
            var item = this.getChildByName('item'+i);
            this.mouse[i] = new Mouse(item.getChildByName('normal'),item.getChildByName('hitted'),20);
        }
        Laya.timer.loop(2000,this,this.mouseCreate);
    }
    
    
    //绑定ui页面
    Laya.class(Game, "Game", gameUI);
    var _proto = Game.prototype;
    _proto.mouseCreate = function(){
        var num = Math.floor(Math.random()*9);
        //显示地鼠
        this.mouse[num].show();
    }
    return Game;
}());