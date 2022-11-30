function tapeEquilibrium(Arr) {
    if(Arr.length === 0) {
        return 0
    }
    if(Arr.length === 1) {
        return Math.abs(Arr[0])
    }
    let min = Infinity;
    for(let i = 1; i<Arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0
        for(let j = 0; j < i; j++) {
            sumLeft += Arr[j]
        }
        for(let k=i; k<Arr.length; k++) {
            sumRight += Arr[k]
        }
        console.log('SUMLEFT', sumLeft, 'SUMRIGHT', sumRight)
        const difference = Math.abs(sumRight - sumLeft)
        if(difference < min) {
            min = difference
        }
    }
    return min
}


function betterVersion(A) {
    let sumLeft = A[0]
    let sumRight = A.reduce((accumulator, currentValue) => accumulator+currentValue) - A[0]

    let min = Infinity;
    for(let i = 1 ; i< A.length; i++) {
        sumLeft += A[i]
        sumRight -= A[i]
        const difference = Math.abs(sumRight-sumLeft)
        if(difference < min) {
            min = difference
        }
    }
    return min
}

const inputdefualt = [3,1,2,4,3]
const input1 = [2,1,3,4,22,4,1]
const input2 = []
const input3 = [5]
const input4 = [-3]
const input5 = [22,12,3,2,4,4,5,3]

console.log(betterVersion(inputdefualt))
console.log(tapeEquilibrium(input1))
console.log(tapeEquilibrium(input2))
console.log(tapeEquilibrium(input3))
console.log(tapeEquilibrium(input4))
console.log(tapeEquilibrium(input5))
