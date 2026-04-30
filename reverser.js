function reverse(input) {
    let res = Array.isArray(input) ? [] : "" ;
    for (let i = input.length -1  ; i>= 0 ; i--) {
        let char = input[i]
        if (Array.isArray(char)) {
            res.push(char)
        }else {
            res+= char
        }
    }
    return res
}
