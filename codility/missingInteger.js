function missingInteger(A) {
    A.sort()
    if(A[0] === 2) {
        return 1
    }
    let minPositiveInteger = A[0]
    for(let i = 1; i<A.length; i++) {
        if(A[i] > 0 && minPositiveInteger > 0) {
            if(A[i] - minPositiveInteger > 1){
                return minPositiveInteger+1
            }
            minPositiveInteger = A[i]
        }
        else {
            if(A[i] > 0 && minPositiveInteger < 0) {
                if(A[i] !== 1) {
                    return 1
                }
            }
            else {
                minPositiveInteger = A[i]
            }
        }
    }
    if(minPositiveInteger <= 0) {
        return 1
    }
    return minPositiveInteger + 1
}

function improved(A) {
    const newArray = A.filter(value => value > 0) 
    if(newArray.length === 0) {
        return 1
    }
    newArray.sort()
    if(newArray[0] > 1) {
        return 1
    }
    for(let i = 1; i< newArray.length; i++) {
        if(newArray[i] - newArray[i - 1] > 1) {
            return newArray[i-1] + 1
        }
    }
    return newArray.pop() + 1
}

const input1 = [1,3,6,4,1,2]
const input2 = [-1, -3]
const input3 = [-1, 3]
const input4 = [-1,0,1]

// console.log(missingInteger(input1))
// console.log(missingInteger(input2))
// console.log(missingInteger(input3))
// console.log(missingInteger(input4))

console.log(improved(input1))
console.log(improved(input2))
console.log(improved(input3))
console.log(improved(input4))