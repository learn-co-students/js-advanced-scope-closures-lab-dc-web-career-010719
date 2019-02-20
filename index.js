function produceDrivingRange(num) {
  return function(num1, num2){

    if((num2.split("th")[0]-num1.split("th")[0]) > num) {
      return `${Math.abs((num2.split("th")[0]-num1.split("th")[0])-num)} blocks out of range`
    }else if((num2.split("th")[0]-num1.split("th")[0]) < num){
      return `within range by ${Math.abs((num2.split("th")[0]-num1.split("th")[0]))}`
    }
  }


}
function produceTipCalculator(num) {
  return function(tip) {
    return tip * num
  }

}

function createDriver() {
  let int = 0
  return class Item {
    constructor(name) {
      this.name = name;
      this.id = int;
      int+=1
    }
  }

}
