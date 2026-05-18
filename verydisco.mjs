const argument = process.argv[2]

function revers(argument) {
    let res = ""
    let split = argument.split(' ')
    for (let i = 0; i < split.length; i++) {
        let word = split[i]
        let middle = Math.ceil(word.length / 2) 
        let first = word.slice(0 , middle)
        let second = word.slice(middle)
        res += second + first + ' '

    }
    return (res)

}
console.log(revers(argument))