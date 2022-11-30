function cylclicRotation(arr, rotate) {
    if(rotate === arr.length) {
        return arr
    }
    function rotation(value) {
        const slice = arr.slice(-value)
        return slice.concat(arr.slice(0, arr.length-value))
    }
    if(rotate > arr.length) {
        return rotation(rotate%arr.length)
    }
    return rotation(rotate)
}

console.log(cylclicRotation([3, 8, 9, 7, 6], 3))
console.log(cylclicRotation([3, 8, 9, 7, 6], 14))
console.log(cylclicRotation([3, 8, 9, 7, 6], 5))