function fusion(obj1, obj2) {
    let newObj = {}
    // get the keys from object
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    for (let i = 0; i < key1.length; i++) {
        let key = key1[i]
        // check if ths Obj2 has  the same  key of obj 1
        if (Object.hasOwn(obj2, key)) {
            // if the value of keys is array
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                newObj[key] = obj1[key].concat(obj2[key])
            } else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                newObj[key] = obj1[key] + " " + obj2[key]
            } else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                newObj[key] = obj1[key] + obj2[key]
            } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                newObj[key] = fusion(obj1[key], obj2[key])
            }
            // if he dont matching in type
            else {
                newObj[key] = obj2[key]
            }
        }else {
            newObj[key] = obj1[key]
        }
        
    }
    for (let j = 0 ; j < key2.length ; j++) {
        let key = key2[j]
        if (!Object.hasOwn(obj1 , key)) {
            newObj[key] = obj2[key]
        }
    }
    return newObj
}

