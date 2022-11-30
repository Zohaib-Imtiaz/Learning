setTimeout(() => {
    console.log('TIME OUT 1')
}, 0)

Promise.resolve().then(() => {
    console.log('promise 1')
}).then(() =>{
    console.log('promise 2')
})

setTimeout(() => {
    console.log('TIME OUT 2')
}, 0)