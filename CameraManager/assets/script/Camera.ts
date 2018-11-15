import CameraManager from './CameraManager'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property({
    type: cc.Node,
    displayName: 'layer列表'
  })
  LayerList: cc.Node[] = []

  onLoad() {
    CameraManager.getInstance().init(this.node, this.LayerList)
  }
}
