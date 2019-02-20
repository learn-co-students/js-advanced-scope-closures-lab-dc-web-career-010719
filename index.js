function produceDrivingRange (range) {
    return function(start, finish) {
        let distance = Math.abs(parseInt(start) - parseInt(finish))
        if (distance > range) {
            return `${distance-range} blocks out of range` 
        } else {
            return `within range by ${range - distance}`
        }
    }
}

function produceTipCalculator(percent) {
    return function(fare) {
        return fare * percent
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name){
            this.id = ++driverId
            this.name = name
        }
    }
}