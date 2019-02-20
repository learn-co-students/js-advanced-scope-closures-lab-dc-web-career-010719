function produceDrivingRange(num) {
  return function (num1, num2) {
    let diff = Math.abs(noTh(num1) - noTh(num2))
    return (diff < num) ? (`within range by ${Math.abs(num - diff)}`) : (`${Math.abs(num - diff)} blocks out of range`) 
  }
}

let noTh = st => st.split("th")[0]

function produceTipCalculator(percent) {
  return function (bill) {
    return bill*percent
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor (name) {
      this.id = ++driverId
      this.name = name
    }
  }
}