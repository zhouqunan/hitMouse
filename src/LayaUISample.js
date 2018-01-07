var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;


// 创建TestPageUI的子类
function Game()
{
	Game.super(this);
}
Laya.class(Game, "Game", gameUI);

//初始化微信小游戏
Laya.MiniAdpter.init();

Laya.init(1136, 640);
Laya.loader.load("res/atlas/game.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);

function onAssetLoaded()
{
	Laya.stage.addChild(new Game());
}

