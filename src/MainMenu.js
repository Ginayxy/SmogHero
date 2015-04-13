/**
 * Created by yuxinyu_91 on 3/27.
 */

var MainMenuLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        var size = cc.winSize;
        cc.spriteFrameCache.addSpriteFrames(res.MMButtons_plist);
        // 颜色渐变图层
        var bg = new cc.LayerGradient(cc.color(246,237,213),cc.color(196,196,196),cc.p(0,1));
        // 背景
        //var bg = new cc.Sprite(res.MMBackground_png);
        var title = new cc.Sprite(res.MMTitle_png);
        var buildings = new cc.Sprite(res.MMBuildings_png);
        var rope = new cc.Sprite('#Rope.png');
        //bg.attr({x: size.width / 2, y: size.height / 2});
        title.attr({x: size.width / 2, y: 900});
        buildings.attr({x: size.width / 2, y: 0, anchorX: 0.5, anchorY: 0});
        rope.attr({x: size.width / 2, y: 950, anchorX: 0.5, anchorY: 1});
        this.addChild(bg,0,1);
        this.addChild(title, 2);
        this.addChild(buildings);
        this.addChild(rope, 1);

        // 文字
        var play_txt = new cc.LabelBMFont('PLAY', res.charmap_fnt);
        play_txt.attr({x: size.width / 2, y: size.height / 2});
        play_txt.setColor(cc.color(255, 255, 255));
        play_txt.setScale(0.8);
        //this.addChild(play_txt);

        // 按钮
        var playBtnUp = new cc.Sprite('#Playbtn_up.png');
        var playBtnDown = new cc.Sprite('#Playbtn_down.png');
        var roleBtnUp = new cc.Sprite('#Rolebtn_up.png');
        var roleBtnDown = new cc.Sprite('#Rolebtn_down.png');
        var settingBtnUp = new cc.Sprite('#Settingbtn_up.png');
        var settingBtnDown = new cc.Sprite('#Settingbtn_down.png');

        var play_btn = new cc.MenuItemSprite(playBtnUp, playBtnDown, this.onPlay, this);
        var role_btn = new cc.MenuItemSprite(roleBtnUp, roleBtnDown, this.onRole, this);
        var setting_btn = new cc.MenuItemSprite(settingBtnUp, settingBtnDown, this.onSetting, this);

        play_btn.x = size.width / 2;
        play_btn.y = 650;
        role_btn.x = size.width / 2 - 61;
        role_btn.y = 500;
        setting_btn.x = size.width / 2 + 61;
        setting_btn.y = 500;

        var menu = new cc.Menu(play_btn, role_btn, setting_btn);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 2, 10);

        return true;
    },

    onPlay: function(){

    },

    onRole: function(){

    },

    onSetting: function(){

    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
