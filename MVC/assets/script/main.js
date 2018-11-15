var data = require("data")

cc.Class({
    extends: cc.Component,

    properties: {
        element:cc.Node,
        //View
        outLabel:cc.Label,
        out_2:cc.Label,
        out_8:cc.Label,
        out_10:cc.Label,
        out_16:cc.Label,
    },

    start () {
        this.node.on("showResult", function(event){
            this.outLabel.string = data.getString()
            this.out_2.string = data.getFormat("2")
            this.out_8.string = data.getFormat("8")
            this.out_10.string = data.getFormat("10")
            this.out_16.string = data.getFormat("16")
            this.highLightTabel(data.parseString())
            event.stopPropagation()
        }, this)
    },
    
    highLightTabel(json){
        this.reFresh(this.element.children)
        for(var order of json){
            this.highLightEle(order)
        }
    },
    
    highLightEle(order){
        if(this.element.getChildByName("m"+order)===null){
            /** **/
        }else{
            this.element.getChildByName("m"+order).color = 
                cc.Color.GREEN
        }
    },

    reFresh(array){
        for(var ele of array){
            ele.color = cc.Color.BLACK
        }
    },
})
