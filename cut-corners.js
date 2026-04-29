

function trunc(arr) {
    let res = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
        let isnegative = false ;
        let nb = arr[i];
        let step  = 1 ;
        let steps = [] ;
        if (nb < 0) {
            nb = nb * -1
            isnegative = true
        }
        while (step <= nb) {
            steps.push(step)
            step = step * 2
        }
        let r = 0 ;
        for (let i = steps.length -1 ; i >= 0 ; i--) {
            if  (r < nb) {
                r += steps[i]
            }
            
        }
        if (isnegative) {
                r = r * -1
        
        }
        res.push(r)
    }
    return res
}


function round(arr) {
    let res = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        let nb  = arr[i] 
        let sum = 0.5;
        if (nb < 0 ){
            sum = -0.5
        }
        r = nb + sum
        res.push(r)
    }
    res = trunc(res)
    return res
}


function floor(arr) {
    let res = [];
    for (let i = 0 ; i < arr.length ; i++) {
        let nb = arr[i] ;
        
        if (nb > 0) {
          nb -=1
        }
        res.push(nb)

    }
    res = trunc(res)
    return res
}


function ceil(arr) {
    let res = [];
    for (let i = 0 ; i < arr.length ; i++) {
        let nb = arr[i] ;
        
        if (nb > 0) {
          nb +=1
        }
        res.push(nb)

    }
    res = trunc(res)
    return res
}
