function trunc(nb) {
    let res = 0; 
   
        
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
        res = (r)
    
    return res
}

function round(nb) {
    let res = 0;

        let add = 0.5 ;
        if (nb < 0) {
            add = -0.5;
        }
        let r = nb + add
        res =(r)
    
    res = trunc(res)
    return res
}

function floor(nb) {
   
        if (nb< trunc(nb) ) {
            nb = nb - 1
        }
    return  trunc(nb)
}

function ceil(nb) {
   
        
        if (nb > trunc(nb) ) {
            nb = nb + 1
        }
    return trunc(nb)
}

