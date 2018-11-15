// hero props
const LIFE = 100
const BloodDelta = 1 / LIFE

const OriginBlood = 100 * BloodDelta
let currentBlood = undefined

// export the props
module.exports = {
  LIFT: LIFE,
  OriginBlood: OriginBlood,
  BloodDelta: BloodDelta,
  currentBlood: currentBlood
}