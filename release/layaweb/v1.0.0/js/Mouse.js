/*
* 地鼠类;
*/
var Mouse = (function () {
    //地鼠创建，需要普通状态，击打状态
    function Mouse(normal,hitted,downY) {
        this.normal = normal;
        this.hitted = hitted;
        this.downY = downY; 
        this.upY = this.normal.y;
        this.isHit = false; //是否被击打标记
        this.isshow = false; //是否显示中标记
        this.reset();
        this.normal.on(Event.CLICK,this,this.hit); 
    }
    /**
     * 对象函数需要原型模式创建
     */
    //获取原型
    var _proto = Mouse.prototype;
    _proto.reset = function(){
        this.normal.visible = false;
        this.hitted.visible = false;
        this.isshow = false;
        this.isHit = false;
        this.normal.y = this.downY;
    }
    //地鼠显示
    _proto.show = function(){
        //若已经在显示了，则阻断显示
        if(this.isshow) return;
        var skinNum = Math.random()>0.4?1:2;
        this.normal.skin = 'game/mouse_normal_'+skinNum+'.png';
        this.hitted.skin = 'game/mouse_hit_'+skinNum+'.png';
        this.isshow = true;
        this.normal.visible = true;
        //可触碰属性
        this.isMouseEnable = true;
        Laya.Tween.to(this.normal,{y:this.upY},500,Ease.backOut,Handler.create(this,this.showComplete));
    }
    //地鼠击打
    _proto.hit = function(){
        //若已经被击打则不能再被击打
        if(this.isHit || !this.isMouseEnable) return;
        this.normal.visible = false;
        this.hitted.visible = true;
        this.isHit = true;
        //被击两秒后还原
        Laya.timer.once(1000,this,this.reset);
    }
    //显示完成
    _proto.showComplete = function(){
        //若被击打，则不执行
        if(this.isHit) return;
        Laya.timer.once(1000,this,this.hide);
    }
    _proto.hide = function(){
        //可触碰属性
        this.isMouseEnable = false;
        Laya.Tween.to(this.normal,{y:this.downY},500,Ease.backIn,Handler.create(this,this.reset));
    }
    return Mouse;
}());