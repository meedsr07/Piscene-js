function replica(target, ...arg ) {
    for (let i = 0 ; i < arg.length ; i++ ) {
      let obj = arg[i] 
      let keys = Object.keys(obj) 
      for (let key of keys) {
        let value = obj[key] 
        if (typeof value  != 'object' || value instanceof RegExp || Array.isArray(value)) {
          target[key] = value ; 
        }else {
              if ( typeof target[key] !=  'object' || target[key] === null || Array.isArray(target[key])) {
                target[key] = {}
              }
              replica(target[key], value)
        }
      }
    }
    return target
}

