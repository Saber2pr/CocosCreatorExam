const HeroProps = require('./Hero')

cc.Class({
  extends: cc.Component,

  properties: {
    HeroBlood: {
      type: cc.ProgressBar,
      default: null,
      displayName: '角色血条'
    },
    HeroProp: {
      type: cc.Label,
      default: null,
      displayName: '角色信息'
    },
    restartBtn: {
      type: cc.Button,
      default: null,
      displayName: '重新开始按钮'
    }
  },

  onLoad() {
    cc.director.getPhysicsManager().enabled = true
  },
  start() {
    // init blood
    HeroProps.currentBlood = HeroProps.OriginBlood
    // init bar
    this.HeroBlood.progress = HeroProps.currentBlood
    // init label
    this.HeroProp.string = parseInt(HeroProps.currentBlood * HeroProps.LIFT)
    // init ui
    this.restartBtn.node.on('click', () => {
      cc.director.loadScene('main')
    })
  }
});