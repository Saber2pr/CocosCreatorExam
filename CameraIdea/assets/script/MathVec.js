/**
 * > 2018年9月1日15:26:22
 * 1. 给定点和最大极径，限制点的圆形活动范围
 * 2. 给定点和宽高，限制点的矩形活动范围
 * 3. 给定点获取其极角
 * 4. 给定极角，极径获取点
 * 5. 给定点，获取极径
 * 6. 给定点和条件， 获取随机数
 * 7. 返回origin指向靶目标的单位向量
 * #### By AK-12 @[qq:1029985799@qq.com, gmail:saber2pr@gmail.com]
 */
var MathVec = {
    /**
     * 给定点和最大极径，限制点的活动范围
     */
    limitToCircle: function (commitPos, limitRadius) {
        return this.getLength(commitPos)<limitRadius?commitPos:this.getPos(this.getAngle(commitPos), limitRadius)
    },
    /**
     * 给定点和宽高，限制点的矩形活动范围
     */
    limitToRect: function (commitPos, width, height) {
        return cc.v2(this.limitToWall(commitPos.x, width), this.limitToWall(commitPos.y, height))
    },
    /**
     * 限定值大小
     */
    limitToWall: function (value, length) {
        return Math.abs(value)<length?value:(value>0?length:-length)
    },
    /**
     * 给定点获取其极角(弧度)
     */
    getAngle: function (Pos) {
        if(Pos.y > 0){
            return Math.acos(Pos.x/Pos.mag())
        }else{
            return -Math.acos(Pos.x/Pos.mag())
        }
    },
    /**
     * 弧度转角度
     */
    transformAngle(angle){
        return angle * 180 / Math.PI
    },
    /**
     * 角度转弧度
     */
    transformAngleToRad(angle){
        return angle / (180*Math.PI)
    },
    /**
     * 给定极角，极径获取点
     */
    getPos: function (angle, radius) {
        return cc.v2(radius*Math.cos(angle), radius*Math.sin(angle))
    },
    /**
     * 给定点，获取极径
     */
    getLength: function (commitPos) {
        return commitPos.mag()
    },
    /**
     * 获取随机x或y点(pos, method)
     */
    getRandNum: function (pos, method) {
        return method==='x'?cc.v2(pos.x*cc.random0To1(), pos.y):cc.v2(pos.x, pos.y*cc.random0To1())
    },
    /**
     * 获取随机点(scalePos, minScale)
     */
    getRandPos: function (scalePos, minScale) {
        return cc.v2(scalePos.x*cc.random0To1() + minScale.x, scalePos.y*cc.random0To1() + minScale.y)
    },
    /**
     * 返回origin指向靶目标的单位向量(origin, target)
     */
    getFront(origin, target){
        var front = cc.v2(target.x - origin.x, target.y - origin.y)
        return cc.v2(front.x/front.mag(), front.y/front.mag())
    },
    /**
     * 返回两点间距离(origin, target)
     */
    getDistance(origin, target){
        return cc.v2(target.x - origin.x, target.y - origin.y).mag()
    },
    /**
     * 求子节点的世界坐标(如果父节点在世界下)
     */
    transformToParentWorld(childNode){
        return cc.v2(childNode.parent.x + childNode.x, childNode.parent.y + childNode.y)
    },
    /**
     * 求数组中最大值
     */
    getMaxFromVector(vector){
        return Math.max.apply(null, vector)
    },
    /**
     * 求数组中最小值
     */
    getMinFromVector(vector){
        return Math.min.apply(null, vector)
    },
    /**
     * 求数组中指定元素下标
     */
    getOrderFromVector(elem, vector){
        for(var order = 0; order < vector.length; order++){
            if(elem === vector[order]){
                return order
            }
        }
    },
    /**
     * 返回负坐标
     */
    getPosNegative(Pos){
        return cc.v2(-Pos.x, -Pos.y)
    },
    /**
     * 两点相加
     */
    addTwoPos(pos1, pos2, method){
        return cc.p(pos1.x + pos2.x, pos1.y + pos2.y)
    },
    /**
     * 获取数组中随机元素
     */
    getRandElem(vector){
        return vector[parseInt((vector.length)*cc.random0To1())]
    }
}

module.exports = MathVec
