function filterValues(obj, Fn) {
    let newObj = {}
    let key = Object.keys(obj)
    for (let i = 0; i < key.length; i++) {
        if (Fn(obj[key[i]])) {
            newObj[key[i]] = obj[key[i]]
        }
    }
    return newObj
}

function mapValues(obj, Fn) {
    let newObj = {};
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = Fn(obj[keys[i]])
    }
    return newObj
}


function reduceValues(obj, Fn, acc = 0) {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        acc = Fn(acc, obj[keys[i]])
    }
    return acc
}

