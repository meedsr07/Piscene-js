function get(src , path) {
  
    let c = src ;
    let part = path.split(".") 
    for (let key of part) { 
        if (c === undefined) {
            return undefined
        }
        c = c[key]
    }
    return c
}
