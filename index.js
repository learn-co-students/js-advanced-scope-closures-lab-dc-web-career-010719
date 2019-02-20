function produceDrivingRange (blockRange) {
  return function (start, finish) {
    let distance = Math.abs(parseInt(start) - parseInt(finish))
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator (percent) {
  return function (total) {
    return total * percent
  }
}

function createDriver () {
  let DriverId = 0
  return class {
    constructor(name)
    {
      this.name = name
      this.id = ++DriverId
    }
  }
}
