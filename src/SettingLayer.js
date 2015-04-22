/**
 * Created by yuxinyu on 4/13.
 */
var SettingLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function () {
        size = cc.director.getWinSize();
        var bg = new cc.LayerGradient(cc.color(255,252,209),cc.color(172,255,250),cc.p(0,1));

        return true;
    },

    onSoundControl:function(){
        SH.SOUND = !SH.SOUND;
        if(SH.SOUND){

        }else{

        }
    }
});