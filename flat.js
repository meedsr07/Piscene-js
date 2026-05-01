function flat(arr) {
    let res = []; 
    for (let i = 0 ; i < arr.length ; i++) {
        let elemnt = arr[i] 
        if (Array.isArray(elemnt)) {
            res = res.concat(flat(elemnt))
        }else{
            res.push(elemnt)
        }
    }
    return res
}
