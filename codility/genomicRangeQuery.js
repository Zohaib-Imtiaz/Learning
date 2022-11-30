function genomicRangeQuery(S, P, Q) {
    const results = [];
    function getImpactValue(sub) {
        if(sub.includes('A')) {
            results.push(1)
            return
        }
        if(sub.includes('C')) {
            results.push(2)
            return
        }
        if(sub.includes('G')) {
            results.push(3)
            return
        }
        if(sub.includes('T')) {
            results.push(4)
            return
        }

    }
    for (let i = 0; i< P.length; i++) {
        const substring = S.slice(P[i], Q[i] + 1)
        console.log(substring)
        getImpactValue(substring)
    }
    return results
}

const input1S = 'CAGCCTA'
const input1P = [2,5,0]
const input1Q = [4,5,6]

console.log(genomicRangeQuery(input1S, input1P, input1Q))