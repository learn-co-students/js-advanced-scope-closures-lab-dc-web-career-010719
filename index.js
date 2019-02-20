function produceDrivingRange(blocks){
    return function(trip1, trip2){
        const range1 = parseInt(trip1)
        const range2 = parseInt(trip2)
        let trip = Math.abs(range1 - range2)
//        debugger
        if (trip > blocks){
            return `${trip - blocks} blocks out of range`
        } else if (trip < blocks){
            return `within range by ${blocks - trip}`
        }
    }
}

function produceTipCalculator(tip){
    return function(fare){
        return fare * tip
    }
}

function createDriver(){
    let driverID = 0
    
    return class{
        constructor(name){
            this.name = name
            this.id = ++driverID
        }
    }
}