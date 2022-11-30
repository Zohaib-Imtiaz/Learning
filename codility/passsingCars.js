function passingCars(Cars) {
    const pairs = []
    let eastCarCount = []
    Cars.forEach((car, ind) => {
        if(car === 0) {
            eastCarCount.push(ind)
            return
        }
        if(car === 1) {
            for(let pairing = 0; pairing < eastCarCount.length; pairing++) {
                pairs.push([eastCarCount[pairing], ind])
            }
        }
    })
    console.log(pairs)
    return pairs.length
}

const input1 = [0,1,0,1,1]

console.log(passingCars(input1))