var Jostick = {function(){
    function Jostick(){
        //摇杆箭头
        this.arrow = new Sprite();
        //摇杆按钮
        this.button = new Sprite();
        //摇杆框
        this.backGround = new Sprite();
    }
    //获取原型
    var _proto_ = Jostick.prototype;
    //初始化
    _proto_.init = function(){
        this.addChild(this.arrow);
        this.addChild(this.button);
        this.addChild(this.backGround);
    }
    _proto_.setTexture = function(arrowSkin,buttonSkin,bgSkin){
        this.arrowImg = arrowSkin;
        this.buttonImg = buttonSkin;
        this.bgImg = bgSkin; 
    }
    _proto_.draw = function(){
        if(this.arrowImg){
            var texture = Laya.loader.getRes(this.arrowImg);
            this.arrow.graphics.drawTexture(texture,0,0,-texture.width/2,-texture.height/2);
        }
        if(this.buttonImg){
            var texture = Laya.loader.getRes(this.arrowImg);
            this.arrow.graphics.drawTexture(texture,0,0,-texture.width/2,-texture.height/2);
        }
        if(this.buttonImg){
            var texture = Laya.loader.getRes(this.arrowImg);
            this.arrow.graphics.drawTexture(texture,0,0,-texture.width/2,-texture.height/2);
        }

    }
}(Laya.Sprite);