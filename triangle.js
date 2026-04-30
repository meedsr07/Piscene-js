function triangle( str , nb) {
let res = "" ; 
for (let i = 0 ; i <= nb ; i++) {
    res += str.repeat(i)
    if (i != nb) {
        res += "\n"
    }
}
return res
}

