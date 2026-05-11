function pick(obj , input) {
    let newobj = {} 
    let keys = Object.keys(obj) 
    let isArr = Array.isArray(input) 
    for (let i = 0 ; i < keys.length ; i++) {
        if (isArr) {
            for (let j  =  0 ; j < input.length ; j++ ) {
                 if (keys[i] === input[j]) {
                newobj[input[j]] = obj[keys[i]]
                }
            }
           
        }else {
            if (keys[i] === input) {
                newobj[input] = obj[keys[i]]
            }
        }
    }
    return newobj
}

function omit(obj , input) {
    let newobj = {} 
    let keys = Object.keys(obj) 
    let isArr = Array.isArray(input) 
    for (let i = 0 ; i < keys.length ; i++) {
        let keep = true ;
        if (isArr) {
            for (let j = 0 ; j < input.length ; j++) {
                if ((keys[i] === input[j])) {
                   keep = false
                }
            }
        }else {
            if ((keys[i] ===input)) {
               keep = false
            }
        }
        if (keep) {
            newobj[keys[i]] = obj[keys[i]]
        }
    }  
    return newobj
}


