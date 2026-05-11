function words(input ) {
   let arr = input.split(" ")
   return arr
}

function sentence(arr) {
    let str = arr.join(" ")
    return str 
}

function yell(input) {
    let str = input.toUpperCase()
    return str 
}

function whisper(input) {
    let str = input.toLowerCase()
    return "*"+ str+ "*"
}

function capitalize(input) {
let str =  input[0].toUpperCase()+(input.slice(1,input.length).toLowerCase())
return str 
}

