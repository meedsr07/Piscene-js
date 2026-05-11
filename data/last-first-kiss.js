function first(input) {
return input[0]
}

function last(input) {
return input[input.length -1]
} 

function kiss(input) {
    let arr = []; 
    arr.push(input[input.length -1]) 
    arr.push(input[0])
    return arr
}
