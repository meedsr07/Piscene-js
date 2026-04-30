function DNA(r) {
let res = "" ; 
for (let i = 0 ; i < r.length ; i++) {
    e = r[i] 
    if (e === "C") {
        e = "G"
    }else if (e=== "A") {
        e = "T"
    }else if (e === "U") {
        e = "A"
    }else if ( e === "G") {
        e = "C"
    }
    res += e
}
return res
}

function RNA(d) {
    for (let i = 0 ; i < r.length ; i++) {
    e = r[i] 
    if (e === "G") {
        e = "C"
    }else if (e=== "T") {
        e = "A"
    }else if (e === "A") {
        e = "U"
    }else if ( e === "C") {
        e = "G"
    }
    res += e
}
return res

}

