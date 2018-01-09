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
        this.reset(); 
    }
    /**
     * 对象函数需要原型模式创建
     */
    //获取原型
    var _proto = Mouse.prototype;
    _proto.reset = function(){
        this.normal.visible = false;
        this.hitted.visible = false;
        this.normal.y = this.downY;
    }
    //地鼠显示
    _proto.show = function(){
        this.normal.visible = true;
        Laya.Tween.to(this.normal,{y:this.upY},400,null,0);
    }
    return Mouse;
}());