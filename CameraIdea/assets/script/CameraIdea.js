var MoveCtrllor = require("MoveCtrllor")

cc.Class({
    extends: cc.Component,

    properties: {
        //backgroundLayer
        backgroundLayer:cc.Node,
        //uiLayer
        basic:cc.Sprite,
        touch:cc.Sprite,
        hero:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        MoveCtrllor.init(this.basic, this.touch)
        cc.director.getPhysicsManager().enabled = true
        cc.director.getPhysicsManager().gravity = cc.v2(0, 0)
    },

    start () {

    },

    update (dt) {
        MoveCtrllor.updateCamera(this.backgroundLayer)
    },
});
