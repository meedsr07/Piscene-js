function deepCopy(arg) {
    if (arg instanceof RegExp) {
        return arg
    }
    if (Array.isArray(arg)) {
        let result = [];
        for (let i = 0; i < arg.length; i++) {
            let element = arg[i]
            result.push(deepCopy(element))
        }
        return result
    } else if (typeof arg === 'object') {
        let result = {}
        for (let key in arg) {
            let value = arg[key]
            result[key] = deepCopy(value)
        }
        return result
    }else {
        return arg
    }
}