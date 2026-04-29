function trunc(arr) {
    
    let res = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
           let nb = arr[i]
           r = nb - mod(nb ,1)  
           res.push(r)  
    }
    return res
}

function mod(a, b) {
  return a - parseInt(a / b) * b;
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
