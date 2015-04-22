
cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(800, 1136, cc.ResolutionPolicy.FIXED_HEIGHT);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MainMenuScene());
    }, this);
};
cc.game.run();
