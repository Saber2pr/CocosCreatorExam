import { AsyncAction } from './AsyncAction'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  block: cc.Node = null

  start() {
    let action = this.block.runAction(cc.moveBy(1.5, cc.v2(500, 0)))

    AsyncAction(action).then(() => (this.block.color = cc.Color.GREEN))
  }
}
