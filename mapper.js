function map(arr, Fn) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(Fn(arr[i] , i ,arr));
    }

    return res;
}

function flatMap(arr, Fn) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let result = Fn(arr[i], i, arr);
        if (Array.isArray(result)) {
            res= res.concat(result)
        }else {
            res.push(result)
        }
    }
    return res
    
}
