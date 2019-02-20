function produceDrivingRange(blockRange) {
  return (start, end) => {
    s = parseInt(start)
    e = parseInt(end)
    if (e-s <= blockRange) { return `within range by ${blockRange-(e-s)}` }
    else if (e-s > blockRange) {return `${(e-s)-blockRange} blocks out of range`}
  }
}

function produceTipCalculator(tip) {
  return (amount) => {return amount*tip}
}

function createDriver() {
  let id = 0;

  return class {
    constructor (name) {
      this.name = name
      this.id = ++id}
    }
  }
