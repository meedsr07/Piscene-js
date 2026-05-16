async function series(arr) {
    let res = [] 
    for (let i = 0 ; i < arr.length ; i++) {
        const func = arr[i] 
        let result = await func()
        res.push(result)
    }
    return res
}