function forEach(arr, Fn) {
    for (let i = 0 ; i < arr.length ; i++) {
        Fn(arr[i] , i, arr)
    }
}
