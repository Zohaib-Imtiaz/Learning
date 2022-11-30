function maxCounters(NumberOfCounters, ArrayOfIntegers) {
    const counters = new Array(NumberOfCounters).fill(0)

    ArrayOfIntegers.forEach(value => {
        if(value === NumberOfCounters + 1) {
            counters.fill(Math.max(...counters))
        }
        else {
            counters[value-1] += 1
        }
    })

    return counters

}

const input1 = [3,4,3,6,1,4,4]

console.log(maxCounters(5, input1))