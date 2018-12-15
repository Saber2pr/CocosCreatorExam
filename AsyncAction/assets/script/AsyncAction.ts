/*
 * @Author: AK-12
 * @Date: 2018-12-15 16:11:46
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-15 16:11:46
 */
/**
 * AsyncAction
 * @param action
 */
export let AsyncAction = (action: cc.Action) =>
  new Promise(resolve =>
    new cc.Component().schedule(
      () => (action.isDone() ? resolve(action) : null),
      cc.director.getDeltaTime()
    )
  )
