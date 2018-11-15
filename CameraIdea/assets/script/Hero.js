
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onBeginContact (contact,selfCollider,otherCollider){
        cc.log("contact!")
        //获取碰撞的世界信息
        var worldManifold = contact.getWorldManifold()
        //获取碰撞点的世界坐标[0:vec2, 1:vec2, ...]
        var points = worldManifold.points
        //判断触地,考虑到物理弹性所以小于10
        cc.log(points)
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
