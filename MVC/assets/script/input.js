var data = require("data")

cc.Class({
    extends: cc.Component,

    properties: {
        //inputextArea
        //0,2,5,6,7,8,9,10,11,14,15
        textArea:cc.EditBox,
    },

    onLoad () {
        data.setString("")
    },

    start () {
        this.textArea.node.on("text-changed", function(){
            data.setString(this.textArea.string)
            this.node.dispatchEvent(
                    new cc.Event.EventCustom(
                        "showResult", true))
        }, this)
    },
})
