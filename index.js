
function produceDrivingRange(num){
  return function (value1, value2){
    // debugger
     result = (parseInt(value2) - parseInt(value1))
     if (result > num){
     return `${(result - num)} blocks out of range`;
   } else {
     return `within range by ${(num - result)}`;
   }
  }
}

function produceTipCalculator(num){
  return function (tipValue){
      return result = tipValue * num
  }
}

function createDriver(){
  let DriverId = 0
  return class {
  constructor(name, manufacturePrice){
    this.name = name
    this.id = ++DriverId
    }
  }
}
