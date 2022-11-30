let x = true;
setTimeout(() => {
    console.log('SET TIMEOUT NOW CLOSING')
    x = false
    console.timeEnd('test')
}, 2000)
console.time('test')

while(x) {
    console.log('IN THE LOOP')
}

