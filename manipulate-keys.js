function filterKeys(obj, Fn) {
    let newObj = {}
    let key = Object.keys(obj)
    for (let i = 0; i < key.length; i++) {
        if (Fn(key[i])) {
            newObj[key[i]] = obj[key[i]]
        }
    }
    return newObj
}

function mapKeys(obj, Fn) {
    let newObj = {};
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        newObj[Fn(keys[i])] = obj[keys[i]]
    }
    return newObj
}


function reduceKeys(obj, Fn, acc = "") {
    let keys = Object.keys(obj)

    if (acc === "") {
        acc = keys[0]    
        keys = keys.slice(1)
    }

    return keys.reduce((acc, key) => Fn(acc, key), acc)
}
