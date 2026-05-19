import {readdir} from "node:fs/promises" 


const pathname = process.argv[2] 

let files = await readdir(pathname) 
let res = []
for (let i = 0 ; i < files.length ; i++) {
    let file = files[i].replace(".json" , "")
    let parts = file.split("_") 
    let firstname= parts[0]
    let lastname = parts[1]
    res.push({lastname , firstname})
}

res.sort((a, b) => {
    if (a.lastname === b.lastname) {
        return a.firstname.localeCompare(b.firstname)
    }
    return a.lastname.localeCompare(b.lastname)
})

for (let i = 0; i < res.length; i++) {
    let g = res[i]
    console.log(i + 1 + ". " + g.lastname +" "+ g.firstname)
}