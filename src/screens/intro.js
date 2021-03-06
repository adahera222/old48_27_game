game.IntroScreen = me.ScreenObject.extend({
    init: function() {
        this.parent(true);
        this.title = null;
        this.counter = 0;
    },

    onResetEvent: function() {
        if (this.title == null) {
            this.title = me.loader.getImage("intro_screen");
        }
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    },

    draw: function(context) {
        context.drawImage(this.title, 0, 0);
    },

    update: function() {
        if (me.input.isKeyPressed('enter')){
            me.state.change(me.state.MENU);
        }else if (this.counter < 120){
            this.counter++;
        } else {
            me.state.change(me.state.MENU);
        }
    },

    onDestryEvent: function() {
        this.title = null;
        this.font = null;
        me.input.unbindKey(me.input.KEY.ENTER);
    }
});
