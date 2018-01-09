var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Event = Laya.Event;
(function(){
	//初始化微信小游戏
	Laya.MiniAdpter.init();
	Laya.init(1136, 640);
	Laya.loader.load("res/atlas/game.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
})()



function onAssetLoaded()
{
	var game = new Game();
	Laya.stage.addChild(game);
	var hammer = new Hammer();
	Laya.stage.addChild(hammer);
	hammer.start();
}


