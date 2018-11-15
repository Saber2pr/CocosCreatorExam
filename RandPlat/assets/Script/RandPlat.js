/**
 * By_AK-12(PrprSaber)
 * 2018年9月14日14:14:14
 * @copyright
 */
cc.Class({
    extends: cc.Component,

    properties: {
        gifts: {
            default: [],
            type: [cc.Sprite]
        },
        plat:cc.Node,
        inforLabel:cc.Label,
        resultLayout:cc.Node,
    },

    originRota:null,
    animPlay:null,
    giftOrder:null,
    resultLabel:null,
    lastAngle:null,

    onLoad () {
        this.originRota = this.plat.rotation
        this.animPlay = this.plat.getComponent(cc.Animation)
        this.resultLabel = this.resultLayout.getChildByName('result').getComponent(cc.Label)
        this.lastAngle = this.originRota
    },

    start () {
        this.plat.on("touchstart", function(){
            cc.log('click')
            this.startPlay()
        }, this)
    },

    update (dt) {
        this.giftOrder = this.inforRotation(this.plat.rotation-this.originRota)
        this.highLightGift(this.giftOrder)
        this.getResult()
    },
    
    //随机角度
    randAngle(){
        return parseInt(360 * cc.random0To1())
    },

    //开始抽奖
    startPlay(){ 
        cc.log('startPlay')       
        var stateStart = this.animPlay.play('rotationStart')
        this.getAngleClip(stateStart)[0] = this.lastAngle
        this.inforLabel.string = '等待\n结果'
        this.scheduleOnce(function(){
            this.processPlay()
        }, stateStart.duration)
    },
    
    //正在抽奖
    processPlay(){
        cc.log('stateProcess')
        var stateProcess = this.animPlay.play('rotating')
        this.scheduleOnce(function(){
            this.finishPlay()
        }, stateProcess.duration)
    },

    //得到rotationClip的旋转值数组
    getAngleClip(state){
        return state.curves[0].values
    },

    //停止抽奖
    finishPlay(){
        cc.log('finishPlay')
        var stateFinish = this.animPlay.play('rotationFinish')
        this.getAngleClip(stateFinish)[1] = this.originRota + this.randAngle()
        this.scheduleOnce(function(){
            this.inforLabel.string = '再次\n抽奖'
            this.lastAngle = this.getAngleClip(stateFinish)[1]
        }, stateFinish.duration)
    },

    //得到圈数
    getRounds(rotation){
        return parseInt(rotation / 360)
    },
    
    //得到序号
    inforRotation(rotation){
        var _rotation = rotation - 360 * this.getRounds(rotation)
        return parseInt(_rotation / (360 / this.gifts.length) )
    },
    
    //刷新
    refreshColor(){
        for(var _order = 0; _order < this.gifts.length; _order++){
            this.gifts[_order].node.color = cc.Color.WHITE
        }
    },

    //高亮奖品
    highLightGift(order){
        this.refreshColor()
        this.gifts[order].node.color = cc.Color.GREEN
    },
    
    //停止结果
    getResult(){
        this.resultLabel.string = this.giftOrder + 1
    },

});
