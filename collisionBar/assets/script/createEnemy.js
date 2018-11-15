cc.Class({
  extends: cc.Component,

  properties: {
    EnemyPrefab: {
      type: cc.Prefab,
      default: null,
      displayName: '怪物预制资源'
    },
    EnemyEntry: {
      type: cc.Node,
      default: null,
      displayName: '入口'
    },
    EnemyNum: {
      type: cc.Integer,
      default: 4,
      displayName: '数量'
    }
  },

  start() {
    this.schedule(() => {
      cc.instantiate(this.EnemyPrefab).setParent(this.EnemyEntry)
    }, 1, this.EnemyNum - 1)
  }

});