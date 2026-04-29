function slice(input , start , end) {
  
    let res = Array.isArray(input) ? [] : "" ;
    for (let i = start ; i < end ; i++) {
        let v = input[i]
        if (Array.isArray(input)) {
            res.push(v)
        }else{
            res+= (v)
        }
    }
    return res
}
