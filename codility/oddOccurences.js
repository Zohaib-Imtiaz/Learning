function oddOccurrences (arr) {
    const map = arr.reduce((map, currentValue) => {
        return map.set(currentValue, (map.get(currentValue) || 0) +1)
    }, new Map)
    const occurences = Array.from(map, value => value[1]%2 !== 0? value[0] : null).filter(value => value !== null)
    console.log(map)
    console.log(occurences)
    
}

oddOccurrences([9,3,9,3,9,7,9])