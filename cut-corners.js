function trunc(arr) {
    let res = []; 
    for ( let i = 0 ; i < arr.length ; i++) {
        let nb = arr[i]
        let step = 1 
        let steps = [] ;
        let isnegative = false ;
        if (nb < 0) {
            nb = nb * -1
            isnegative = true
        }

        // nb = 20 1 2 4 8 16 
        while (step <= nb) {
            steps.push(step)
            step = step * 2
        }
        let resulte = 0 ;
        for ( let j = steps.length -1 ; j >= 0 ; j--) {
            if (resulte  + steps[j] <= nb ) {
                resulte += steps[j]
            }
        }
        let r = nb -(nb - resulte)

        if (isnegative) {
            r = r * -1
            isnegative = false
        }
        res.push(r)
    }
    return res
}

function round(arr) {
    let res = [];
    
    for (let i = 0 ; i < arr.length ; i++ ) {
        let nb = arr[i]
        let add = 0.5 ;
        if (nb < 0) {
            add = -0.5;
        }
        let r = nb + add
        res.push(r)
    }
    res = trunc(res)
    return res
}

function floor(arr) {
    let res = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
        nb = arr[i]
        if (nb< 0 ) {
            nb = nb - 1
        }
        res.push(nb)
    }
    res = trunc(res)
    return res 
}

function ceil(arr) {
    let res = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
        nb = arr[i]
        if (nb > 0 ) {
            nb = nb + 1
        }
        res.push(nb)
    }
    res =  trunc(res)
    return res
}

