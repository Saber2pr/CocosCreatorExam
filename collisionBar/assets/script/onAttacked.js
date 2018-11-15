const HeroProps = require('./Hero')
const EnemyProps = require('./Enemy')

cc.Class({
  extends: cc.Component,

  properties: {
    HeroProp: {
      type: cc.Label,
      default: null,
      displayName: '角色信息'
    }
  },

  onBeginContact(contact, selfCollider, otherCollider) {
    HeroProps.currentBlood -= HeroProps.BloodDelta * EnemyProps.ATK
  },

  onPostSolve(contact, selfCollider, otherCollider) {
    if (HeroProps.currentBlood > 0) {
      selfCollider.node.getChildByName('blood').getComponent(cc.ProgressBar).progress = HeroProps.currentBlood
      this.HeroProp.string = parseInt(HeroProps.currentBlood * HeroProps.LIFT)
    } else {
      cc.log('!!!', HeroProps.currentBlood)
      selfCollider.node.destroy()
    }
  }

});