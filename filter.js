function filter(arr , Fn) {
    let res = [] ;
    for (let i = 0 ; i< arr.length ; i++) {
        if (Fn(arr[i] , i , arr)) {
            res.push(arr[i] )
        }
    }
    return res
}


function reject(arr , Fn) {
    let res = [] ;
    for (let i = 0 ; i< arr.length ; i++) {
        if (!(Fn(arr[i] , i , arr))) {
            res.push(arr[i] )
        }
    }
    return res
}


function partition(arr , Fn) {
    let res = [] ;
    let valid = [] ;
    let invalid = [] ; 
    for (let i = 0 ; i< arr.length ; i++) {
        if (Fn(arr[i] , i , arr)) {
            valid.push(arr[i])
        }else{
            invalid.push(arr[i])
        }
    }
    res.push(valid , invalid)
    return res
}