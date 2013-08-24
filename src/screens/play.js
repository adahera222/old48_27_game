game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
        me.game.addHUD(0, 0, 960, 480);
        // add a new HUD item
        me.game.HUD.addItem("secondToDie", new game.SecondsRemainsHUD(900,10));
        me.game.HUD.addItem("panel-top", new me.SpriteObject(0, 0, me.loader.getImage("panel-top")));
        //me.game.HUD.addItem("score2", new game.ScoreObject(300, 10));
        me.game.HUD.updateItemValue("secondToDie", 8.8);
        //me.game.HUD.addItem("ui", new game.UI());
        //me.game.HUD.add(new game.HUD_Heart(0,0));

        // make sure everything is in the right order
        me.game.sort();
        me.levelDirector.loadLevel("area1");
    },


    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        ; // TODO
        // remove the HUD
        me.game.disableHUD();
    }
});
