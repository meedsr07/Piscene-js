import { readFile } from "node:fs/promises"

const fileName  = process.argv[2]
const data =  await readFile(fileName, 'utf8') 

function revers(data)  {
    let split = data.split(' ') 
    let res = [] 
    for (let i = 0 ; i < split.length ; i++) {
        let word = split[i] 
        let middle = Math.floor(word.length / 2) 
        let first = word.slice(0 , middle)
        let second = word.slice(middle) 
        res.push(second + first)
    }
    return res.join(' ')
}


console.log(revers(data))