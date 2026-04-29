function slice(input , start , end = input.length) {
    let isArr = Array.isArray(input);
    let res = isArr? [] : "" ;
    for (let i = start ; i < end ; i++) {
    
        let v = input[i]
        if (isArr) {
            res.push(v)
        }else{
        
            res+= (v)
        }
    }
    return res
}