function binaryGap(number) {
    const str = number.toString(2)
    const regex = /(?=0)(0*1)|(10+1)/gm
    const matches = str.matchAll(regex)
    const arrayOfMatches = Array.from(matches, x => (x[0].replaceAll('1', '')).length)
    const maxBinaryGap = Math.max(...arrayOfMatches)
    console.log(str, regex, maxBinaryGap)
    return maxBinaryGap
}

binaryGap(1141)