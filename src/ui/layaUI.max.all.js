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

		gameUI.uiView={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":45,"x":193,"skin":"game/back.png"}},{"type":"Box","props":{"y":212,"x":323},"child":[{"type":"Image","props":{"y":83,"skin":"game/mask-01.png"}},{"type":"Image","props":{"x":6,"skin":"game/mouse_normal_1.png"}},{"type":"Image","props":{"y":13,"x":7,"skin":"game/mouse_hit_1.png"}}]}]};
		return gameUI;
	})(View);
var HandlerUI=(function(_super){
		function HandlerUI(){
			

			HandlerUI.__super.call(this);
		}

		CLASS$(HandlerUI,'ui.HandlerUI',_super);
		var __proto__=HandlerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HandlerUI.uiView);

		}

		HandlerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":61,"width":98,"skin":"game/hammer.png","pivotY":51,"pivotX":58,"height":77}}]};
		return HandlerUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]};
		return TestPageUI;
	})(View);