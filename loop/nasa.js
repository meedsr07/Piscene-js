function nasa(nb) {
    let res = "" ;
    for (let i = 1 ; i <= nb ; i++) {
        if ( (i % 3 === 0 ) && (i % 5 === 0 )) {
            res += "NASA"
        }else if (i % 3 === 0 ) {
            res += "NA"
        }else if (i % 5 === 0 ) {
            res += "SA"
        }else  {
            res += i
        }
        if ( i != nb) {
            res += " "
        }
        
    }
    return res
}


