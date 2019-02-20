const produceDrivingRange = function (range) {
  return function (start, destination) {
    let trip = Math.abs(parseInt(destination) - parseInt(start))
    if (trip >= range) {
      return `${trip - range} blocks out of range`
    } else {
      return `within range by ${range - trip}`
    }
  }
}

const produceTipCalculator = function (tipPercentage) {
  return function (fare) {
    return tipPercentage * fare
  }
}

const createDriver = function () {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
