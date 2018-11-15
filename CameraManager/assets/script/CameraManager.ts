/*
 * @Author: AK-12
 * @Date: 2018-11-14 22:30:09
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-11-15 11:42:02
 */
/**
 *摄像机控制
 *
 * 单例类
 * @export
 * @class CameraManager
 */
export default class CameraManager {
  private constructor() {}
  private static instance: CameraManager
  static getInstance(): CameraManager {
    this.instance = !!this.instance ? this.instance : new CameraManager()
    return this.instance
  }
  /**
   * 节点列表
   */
  private LayerList: cc.Node[]
  /**
   * 摄像机节点
   */
  private Camera: cc.Node
  /**
   * 初始化摄像机
   * @param camera
   * @param layerlist
   */
  public init(camera: cc.Node, layerlist: cc.Node[]) {
    this.LayerList = layerlist
    this.Camera = camera
    return this
  }
  /**
   *摄像机注视
   * @param layerName
   */
  public look(layerName: string) {
    let resultArr = this.LayerList.filter(node => node.name === layerName)
    try {
      this.moveto(resultArr[0].position)
    } catch (error) {
      this.log(error, layerName)
    }
    return this
  }
  /**
   *移动摄像机
   *
   * @private
   * @param {cc.Vec2} pos
   * @memberof CameraManager
   */
  private moveto(pos: cc.Vec2) {
    this.Camera.runAction(cc.moveTo(0.5, pos).easing(cc.easeSineInOut()))
  }
  /**
   *异常处理
   *
   * @private
   * @param {*} error
   * @param {*} layerName
   * @memberof CameraManager
   */
  private log(error, layerName) {
    console.error('the layer looked : ' + layerName + ' is undefined\n', error)
  }
}
