function minAvgTwoSlice(Arr) {
    let minAverge = Infinity
    let minAverageIndex = -1
    for(let i = 0; i<Arr.length - 2; i++){
        const sumAverageOf2 = Arr[i] + Arr[i+1] / 2
        if(minAverge > sumAverageOf2 ){
            minAverageIndex = i
            minAverge = sumAverageOf2
        }
    }
    for(let i = 0; i<Arr.length - 3; i++){
        const sumAverageOf3 = Arr[i] + Arr[i+1] + Arr[i+2] / 3
        if(minAverge > sumAverageOf3 ){
            minAverageIndex = i
            minAverge = sumAverageOf3
        }
    }
    return minAverageIndex
}

const input1 = [4,2,2,5,1,5,8]
const input2 = [4,2,2,5,1,1,8]

console.log(minAvgTwoSlice(input1))
console.log(minAvgTwoSlice(input2))