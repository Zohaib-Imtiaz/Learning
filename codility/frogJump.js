function frogJump(initialPosition, targetPosition, distancePerJump) {
    if(initialPosition >= targetPosition) {
        return 0
    }
    const distanceToCover = targetPosition - initialPosition
    const steps = Math.ceil(distanceToCover / distancePerJump)
    return steps
}

console.log(frogJump(10,85,30))
console.log(frogJump(85,85,30))