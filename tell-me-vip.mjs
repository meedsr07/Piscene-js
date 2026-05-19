import {readFile , writeFile , readdir } from 'node:fs/promises' 
import { join } from 'node:path'


const argement = process.argv[2] 
const files = await readdir(argement) 
let res = []
for (let i = 0 ; i < files.length ; i++) {
    
    let data = await (readFile( join(argement , files[i] ), "utf-8")) 
    let fullname = files[i].replace(".json" , "")
    let split = fullname.split("_") 
    
    let guest = JSON.parse(data) 

    if (guest.answer === "yes") {
        res.push({
            firstname: split[0],
            lastname: split[1]
        })
    }

}

res.sort((a, b) => {
    return a.lastname.localeCompare(b.lastname)
})

let output = ""
for (let i = 0; i < res.length; i++) {
    let g = res[i]
    output += (i + 1 + ". " + g.lastname +" "+ g.firstname)
    if ( i !== res.length -1) {
        output+= '\n'
    }
}

writeFile("vip.txt" , output)