function retry(count  , callback) {
    let c = 0 ;
    return async function(...args) {
        while (c <= count) {
            try {
                return await callback(...args)
            }catch(err) {
                c++
               if (c > count) throw err
            }
        }
    }
}

function timeout(delay, callback) {
    return async function(...args) {
        return Promise.race([callback(...args), 
            new Promise((_,reject) => {
            setTimeout(() => {
                reject(new Error('timeout'))
            },delay)
        }) ])
    }
}