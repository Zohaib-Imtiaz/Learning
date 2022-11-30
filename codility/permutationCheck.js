function permutationCheck(A) {
    A.sort()
    if(A.length === A[A.length-1]) {
        return 1
    }
    return 0
}

const input1 = [4,1,3,2]
const input2 = [4,1,2]

console.log(permutationCheck(input1))
console.log(permutationCheck(input2))