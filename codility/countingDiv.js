function countingDiv(A, B, K) {
    // console.log(A, B, K)
    if(A >= 2000000000 || B >= 2000000000 || K >= 2000000000) {
        return -1
    }
    let beforeADividends = Math.floor(A / K)
    if(A % K === 0) {
        beforeADividends -= 1
    }
    const dividends = Math.floor(B / K) 
    // console.log(Math.floor(A / K), Math.floor(B / K) )
    return dividends - beforeADividends
}

const input1 = [6,11,2]
const input2 = [6,6,2]
const input3 = [7,15,2]

console.log(countingDiv(...input1))
console.log(countingDiv(...input2))
console.log(countingDiv(...input3))