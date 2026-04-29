function indexOf(arr , value ,  start = 0) {
     if (start < 0){
        start = arr.length + start
    } 
    let res = -1 ;
    for (let i = start; i < arr.length ; i++) {
        if (arr[i] === value) {
            res = i
            break
        }
    }
    return res
}

function lastIndexOf(arr , value , start = 0) { 
    
    let res = -1 ; 
    if (start < 0){
        start = arr.length + start
    } 
    for ( let i = start ; i < arr.length ; i++) {
        if (arr[i] === value) {
            res = i 
        }
    }
    return res
}



function includes(arr , value) {
    for (let i= 0 ; i < arr.length ; i++) {
        if (arr[i] === value) {
            return true
        }
    }
    return false
}