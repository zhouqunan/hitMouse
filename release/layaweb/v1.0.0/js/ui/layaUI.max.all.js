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

		STATICATTR$(gameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"y":320,"x":568,"width":1136,"height":640,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":193,"skin":"game/back.png"}},{"type":"Box","props":{"y":212,"x":323,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-01.png"}}]},{"type":"Box","props":{"y":212,"x":510,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-02.png"}}]},{"type":"Box","props":{"y":218,"x":707,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-03.png"}}]},{"type":"Box","props":{"y":306,"x":297,"name":"item3"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-04.png"}}]},{"type":"Box","props":{"y":306,"x":513,"name":"item4"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-05.png"}}]},{"type":"Box","props":{"y":304,"x":712,"name":"item5"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-06.png"}}]},{"type":"Box","props":{"y":404,"x":290,"name":"item6"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-07.png"}}]},{"type":"Box","props":{"y":406,"x":511,"name":"item7"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-08.png"}}]},{"type":"Box","props":{"y":410,"x":735,"name":"item8"},"child":[{"type":"Image","props":{"y":0,"x":6,"skin":"game/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png","name":"hitted","alpha":1}},{"type":"Image","props":{"y":83,"x":0,"skin":"game/mask-09.png"}}]},{"type":"Clip","props":{"y":442,"x":75,"skin":"game/clip_number.png","name":"item0","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":83,"skin":"game/clip_number.png","name":"item1","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":91,"skin":"game/clip_number.png","name":"item2","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":99,"skin":"game/clip_number.png","name":"item3","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":107,"skin":"game/clip_number.png","name":"item4","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":115,"skin":"game/clip_number.png","name":"item5","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":123,"skin":"game/clip_number.png","name":"item6","index":10,"clipX":10}},{"type":"Clip","props":{"y":442,"x":131,"skin":"game/clip_number.png","name":"item7","index":10,"clipX":10}}]};}
		]);
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

		STATICATTR$(HammerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":61,"width":98,"skin":"game/hammer.png","pivotY":51,"pivotX":58,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":61,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};}
		]);
		return HammerUI;
	})(View);