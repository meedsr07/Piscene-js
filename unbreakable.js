function split(input , sep) {
    let word = "" 
    let words = []; 
    if (sep === "") {
        for (let i = 0 ; i < input.length ; i++) {
             let c = input[i]
            words.push(c)
        }
        return words
    }
    for (let i = 0 ; i < input.length ; i++) {
        let part = input.slice(i , i+sep.length)
        if (part === sep) {
            words.push(word)
            word = ""
            i+= sep.length -1
        }else {
            word += input[i]
        }
       
    }
    words.push(word)
    return words
}

function join(arr , sep) {
    let res = "" ;
    for ( let i =  0 ; i < arr.length ; i++) {
        let c = arr[i]
        res += c 
        if (i != arr.length  -1) {
            res += sep
        }
    }
    return res
} 

