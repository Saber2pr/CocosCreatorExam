import CameraManager from './CameraManager'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Button)
  backBtn: cc.Button = null

  start() {
    this.backBtn.node.on('click', () => {
      CameraManager.getInstance().look('StartLayer')
    })
  }
}
