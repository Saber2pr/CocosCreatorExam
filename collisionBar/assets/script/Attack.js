cc.Class({
  extends: cc.Component,

  onPostSolve(contact, selfCollider, otherCollider) {
    selfCollider.node.destroy()
  }

});