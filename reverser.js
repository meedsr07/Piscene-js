function reverse(input) {
    let isArr = Array.isArray(input) ;
    let res =  isArr ? [] : "" ;
    if (isArr) {
        for (let i = input.length -1  ; i>= 0 ; i--) {
            let char = input[i]
            res.push(char)
        }
    }else{
        for (let i = input.length -1  ; i>= 0 ; i--) {
            let char = input[i]
            res += char
        }       
    }
    
    return res
}
