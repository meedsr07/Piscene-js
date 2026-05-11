function invert(object) { 
   let newobj = {} 
   let keys = Object.keys(object)
   for (let i = 0 ; i < keys.length ; i ++ ) {
    newobj[object[keys[i]]] = keys[i]
   }
   return newobj
}
