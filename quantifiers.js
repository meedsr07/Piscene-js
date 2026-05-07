function every(arr , Fn) {
    for (let i = 0 ; i < arr.length ; i++) {
        if (!(Fn(arr[i] , i , arr))) {
            return false
        }
    }
    return true
}

function some(arr , Fn) {
    for (let i = 0 ; i < arr.length ; i++) {
        if ((Fn(arr[i] , i , arr))) {
            return true
        }
    }
    return false
}

function none(arr , Fn) {
    for (let i = 0 ; i < arr.length ; i++) {
        if ((Fn(arr[i] , i , arr))) {
            return false
        }
    }
    return true
}
