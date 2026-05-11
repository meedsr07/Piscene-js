function sign(a) { 
    if (a === 0) return 0
    if (a >0) return 1
    if (a < 0) return -1
}

function sameSign(a , b) {
    return sign(a) === sign(b) 
    
}