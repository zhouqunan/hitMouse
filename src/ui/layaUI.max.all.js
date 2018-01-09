var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var gameUI=(function(_super){
		function gameUI(){
			

			gameUI.__super.call(this);
		}

		CLASS$(gameUI,'ui.gameUI',_super);
		var __proto__=gameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameUI.uiView);

		}

		gameUI.uiView={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":45,"x":193,"skin":"game/back.png"}},{"type":"Box","props":{"y":212,"x":323,"name":"mouse0"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-01.png"}}]}]};
		return gameUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":61,"width":98,"skin":"game/hammer.png","pivotY":51,"pivotX":58,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":61,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);