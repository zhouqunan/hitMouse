var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Ease    = Laya.Ease;
var Sprite = Laya.Sprite;
(function(){
	//初始化微信小游戏
	Laya.MiniAdpter.init();
	Laya.init(1136, 640);
	//获取url里的房间参数
    Laya.stage.alignH = Stage.ALIGN_CENTER;
    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.scaleMode = Stage.SCALE_FIXED_WIDTH;
	Laya.loader.load("res/atlas/game.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
})()



function onAssetLoaded()
{
	var game = new Game();
	Laya.stage.addChild(game);
	game.gameStart();
	game.y = Laya.stage.height/2;
	Laya.stage.on(Event.RESIZE,this,function(){
		game.y = Laya.stage.height/2; 
	})
	
}


