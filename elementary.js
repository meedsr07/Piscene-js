function multiply( a , b) {
    let res = 0 ;
    let x = a ;
    let y = b ;
    if (a < 0) x = -a ;
    if  (b < 0) y = -b;

    for (let i = 0 ; i < y ; i++) {
        res+= x
    }
    if ((a < 0 && b >  0) ||(a > 0 && b < 0)) {
        return -res
    }
    return res
}

function divide(a , b) {
    let res = 0 ;
    let x = a ;
    let y = b ;
    if (a < 0) x = -a ;
    if  (b < 0) y = -b; 

    while( x > y) {
        x-= y
        res++ 
    }
    if ((a < 0 && b > 0)||(a> 0 && b < 0)) {
        return -res
    }
    return res
} 

function modulo(a , b) {
    let res = 0 ;
    let x = a ;
    let y = b ;
    if (a < 0) x = -a ;
    if  (b < 0) y = -b; 
    while (x >= y) {
        x -= y 
   
    }
    if ((a < 0 && b > 0)||(a> 0 && b < 0)) {
        return -x
    }
    return x
}
