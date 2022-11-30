function maxProductOfThree(Arr) {
    Arr.sort((a,b) => b-a)
    const prod1 = Math.abs(Arr[Arr.length -1]) * Math.abs(Arr[Arr.length-2]) * Arr[0]
    const prod2 = Arr[0] * Arr[1] * Arr[2]
    if(prod1 > prod2) {
        return prod1
    }
    return prod2
}

const input1 = [-3,1,2,-2,5,6]
const input2 = [-33,1,2,-2,55,6]
const input3 = [-33,1,2,-2,5,6]

console.log(maxProductOfThree(input1))
console.log(maxProductOfThree(input2))
console.log(maxProductOfThree(input3))