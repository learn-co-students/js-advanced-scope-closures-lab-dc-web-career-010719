function produceDrivingRange(num) {
    return function (begin, end) {
        num1 = begin.slice(0, 2)
        num2 = end.slice(0, 2)
        diff = (num2 - num1)
        condition = diff <= num
        if (condition) {
            return `within range by ${num - diff}`
        } else {
            return `${diff - num} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function (price) {
        return price * percent
    }
}

function createDriver() {
    let DriverId = 0

    return class {
        constructor(name) {
            this.name = name
            this.id = ++DriverId
        }
    }
}