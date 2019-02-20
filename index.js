
function produceDrivingRange( blockRange ) {
  return function (startingBlock, endingBlock) {
      let dist = Math.abs(parseInt(startingBlock) - parseInt(endingBlock))
    if (dist <= blockRange) {
      return `within range by ${blockRange - dist}`
    }else{
    return `${dist-blockRange} blocks out of range`}
  }
}

function produceTipCalculator (percent){
  return function (fare){
    return percent*fare
  }
}

function createDriver (){
let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name}
    }
    }
