function pyramid(str, nb) { 
    let res = [] ;
    let space = " ".repeat(str.length)

    for (let i = 1; i <=nb;i++ ) {
        res.push(space.repeat(nb-i)+ str.repeat(2*i-1))
    }
    return res.join("\n")
}

console.log(pyramid("{}" , 12))