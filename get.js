function get(src , path) {
  
    let c = src ;
    let part = path.split(".") 
    for (let key of part) { 
        c = c[key]
    }
    return c
}
