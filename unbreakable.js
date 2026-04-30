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
        let c = input[i]
        if (c != sep) {
            word += c
        }else if (word != "") {
            words.push(word)
            word = ""
        }
        
    }
    if (word != "") {
        words.push(word)
    }
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

