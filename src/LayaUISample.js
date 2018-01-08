var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

(function(){
	//初始化微信小游戏
	Laya.MiniAdpter.init();
	Laya.init(1136, 640);
	Laya.loader.load("res/atlas/game.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
})()



function onAssetLoaded()
{
	Laya.stage.addChild(new Game());
}

