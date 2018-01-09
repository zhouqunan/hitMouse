/*
* name;
*/
var Game = (function () {
    function Game() {
        Game.super(this); //继承父类
        var mouse = new Mouse(this.getChildByName('mouse0').getChildByName('normal'),this.getChildByName('mouse0').getChildByName('hitted'),20);
        //显示地鼠
        mouse.show();
    }
    
    
    //绑定ui页面
    Laya.class(Game, "Game", gameUI);
    return Game;
}());