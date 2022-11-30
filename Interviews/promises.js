const promiseCondition = true;

const promise = new Promise((resolve, reject) => {
    if(promiseCondition) {
        console.log('CREATION')
        resolve()
    }
    reject('REJECTED')
})

promise.then(result => console.log('THEN 1')).catch(err => console.log(err))

