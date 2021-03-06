/**
 * Created by yuxinyu_91 on 4/23.
 */
/**
 * Created by yuxinyu on 4/13.
 */
var ShopLayer = cc.Layer.extend({
    _cloud1: null,
    _cloud2: null,
    _flag: 1,

    ctor: function () {
        this._super();
        this.init();
    },

    init: function () {
        size = cc.director.getWinSize();
        cc.spriteFrameCache.addSpriteFrames(res.MMBg_plist);
        cc.spriteFrameCache.addSpriteFrames(res.STBtn_plist);
        cc.spriteFrameCache.addSpriteFrames(res.Obj_plist);
        // 背景
        var bg = new cc.LayerGradient(cc.color(255, 252, 209), cc.color(172, 255, 250), cc.p(0, 1));
        bg.ignoreAnchorPointForPosition(false);
        bg.attr({x: size.width / 2, y: size.height / 2, anchorX: 0.5, anchorY: 0.5});
        bg.changeWidth(800);
        bg.changeHeight(1136);
        this.addChild(bg, 0);

        var title = new cc.Sprite('#title_store.png');
        title.attr({x: size.width / 2, y: 1000});
        this.addChild(title, 0);

        var buildings = new cc.Sprite('#buildings.png');
        buildings.attr({x: size.width / 2, y: 0, anchorX: 0.5, anchorY: 0});
        this.addChild(buildings, 0);

        this._cloud1 = new cc.Sprite('#bg_cloud1.png');
        this._cloud2 = new cc.Sprite('#bg_cloud2.png');
        this._cloud1.attr({x: size.width / 2 - 300, y: 780});
        this._cloud2.attr({x: size.width / 2 + 320, y: 640});
        this.addChild(this._cloud1);
        this.addChild(this._cloud2);
        this.schedule(function () {
            this._flag = -this._flag;
            this._cloud1.runAction(cc.moveBy(2, cc.p(50 * this._flag, 0)));
            this._cloud2.runAction(cc.moveBy(2, cc.p((-50) * this._flag, 0)));
        }, 2, cc.REPEAT_FOREVER, 1);
        return true;
    },


    onBack: function () {
        cc.director.popScene();
    }
});