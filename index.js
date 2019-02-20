
function produceTipCalculator (rate) {
  return function (fare) {
    return fare * rate
  }
}

function produceDrivingRange (range) {
  return function (start, end) {
    let distance = Math.abs(parseInt(end) - parseInt(start))
    if (range - distance > 0) {
      return `${Math.abs(parseInt(end) - parseInt(start))} blocks of range`
    }
    else {
      return `in range by ${Math.abs(parseInt(end) - parseInt(start))} blocks`
    }
  }
}

function createDriver() {
  driverID = 0
  return class {
    constructor (name) {
      this.id = ++driverID
      this.name = name
    }
  }
}
