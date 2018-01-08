
var Hammer = function(){
    Hammer.super(this);
    var _proto = Hammer.prototype
    //锤子开始
    _proto.start = function(){
        //鼠标隐藏
        Laya.Mouse.hide();
        Laya.stage.on(Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Event.MOUSE_MOVE,this,this.onMouseMove);
        //锤子定位
        this.onMouseMove();
    }
    _proto.end = function(){
        //鼠标显示
        Laya.Mouse.show();
        //解除绑定
        Laya.stage.off(Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Event.MOUSE_MOVE,this,this.onMouseMove);
    }
    _proto.onMouseDown = function(){
        this.hit.play(0,false);
    }

    _proto.onMouseMove = function(){
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/2);
    }
}
Laya.class(Hammer,'Hammer',HammerUI);