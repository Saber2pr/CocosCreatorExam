import CameraManager from './CameraManager'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Button)
  startbtn: cc.Button = null

  start() {
    this.startbtn.node.on('click', () => {
      CameraManager.getInstance().look('NextLayer')
    })
  }
}
