/*
* name;
*/
var Game = (function () {
    function Game() {
        Game.super(this); //继承父类
    }
    //绑定ui页面
    Laya.class(Game, "Game", gameUI);
    return Game;
}());