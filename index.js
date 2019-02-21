
const produceDrivingRange = function(blockRange) {
  return function(block1, block2) {
    let numBlocks = Math.abs(parseInt(block1) - parseInt(block2))
    let rangeBy = Math.abs(blockRange - numBlocks)
    return (blockRange >= numBlocks) ? (`within range by ${rangeBy}`) : (`${rangeBy} blocks out of range`)
  };
};


const produceTipCalculator = function(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}

const createDriver = function() {

  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = driverId ++


    }
  }
}
