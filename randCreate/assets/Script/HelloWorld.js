cc.Class({
  extends: cc.Component,

  properties: {
    cocosList: {
      type: [cc.Prefab],
      default: []
    },
    background: {
      type: cc.Node,
      default: null
    }

  },

  // use this for initialization
  onLoad: function () {},

  start() {
    this.launch()
  },

  launch() {
    this.schedule(() => {
      this.createCocos(this.randPos())
    }, 1)
  },

  randValue: (min, max) => min + (max - min) * Math.random(),

  randPos: () => cc.v2(this.randValue(-960 / 2, 960 / 2), this.randValue(-640 / 2, 640 / 2)),

  createCocos(pos) {
    let newCocos = cc.instantiate(this.getRandPrefab())
    newCocos.setParent(this.background)
    newCocos.setPosition(pos)
  },

  getRandPrefab() {
    let index = parseInt(this.randValue(0, this.cocosList.length))
    if (index < this.cocosList.length) {
      cc.log(index)
      return this.cocosList[index]
    } else {
      throw new Error('no such prefab:' + index)
    }
  }

});