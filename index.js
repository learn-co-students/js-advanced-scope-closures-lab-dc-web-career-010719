
function produceDrivingRange(blockRange) {
  return function(start, finish) {
    let distance = Math.abs(parseInt(start, 10) - parseInt(finish, 10))
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
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
