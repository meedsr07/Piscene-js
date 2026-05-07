function fold(arr , Fn , acc ) {
    
    for (let i = 0 ; i < arr.length ; i++) {
        acc = Fn(  acc , arr[i]) 

    }
    return acc
}


function foldRight(arr , Fn , acc ) {
    
    for (let i = arr.length -1; i >= 0 ; i--) {
        acc = Fn( acc , arr[i]) 
    
    }
    return acc
}

function reduce(arr , Fn) {
    let acc = arr[0]
    for (let i = 1 ; i < arr.length ; i++) {

        acc = Fn(acc ,arr[i])
    }
    return acc
}

function reduceRight(arr  , Fn) {
    let acc = arr[arr.length -1] 
    for (let i = arr.length -2 ; i >= 0 ; i--) {
        acc = Fn(acc , arr[i])
    }
    return acc
}

// const adder = (a, b) => a + b
// console.log(reduceRight([1, 2, 3], adder));
