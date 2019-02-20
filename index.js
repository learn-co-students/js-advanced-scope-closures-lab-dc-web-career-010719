function produceDrivingRange(num){
  return function(block1, block2){
    block1 = block1.split("th")[0]
    block2 = block2.split("th")[0]
    let range = Math.abs(block2-block1)
    if (range > num ){

      return `${Math.abs(range-num)} blocks out of range`

    }else if (range < num ){
      return `within range by ${Math.abs(range-num)}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(price) {
    return percent*price
  }
}
function createDriver() {
  let DriverID = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverID
    }
  }
}
