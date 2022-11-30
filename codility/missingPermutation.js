function missingPermutationNumber (Arr) {
    if(Arr.length === 0) {
        return 1
    }
    Arr.sort()
    if(Arr[0] === 2) {
        return 1
    }
    for(let i = 1; i<Arr.length; i++) {
        if(Arr[i] - Arr[i-1] > 1) {
            return Arr[i-1] + 1
        }
    }
    return Arr.length + 1
}

const input1 = []
const input2 = [2]
const input3 = [1]
// const input4 = [0,1,2,3,5]
// const input5 = [0,1,2,3,4,5]
const input4 = [0,1,2,3,5]
const input5 = [1,2,3,4,5]


console.log(missingPermutationNumber(input1))
console.log(missingPermutationNumber(input2))
console.log(missingPermutationNumber(input3))
console.log(missingPermutationNumber(input4))
console.log(missingPermutationNumber(input5))
// console.log(missingPermutationNumber(input6))
