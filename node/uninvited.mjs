import http from "node:http"
import { writeFile } from "node:fs/promises"
import { error } from "node:console"
const port = 5000
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    const filename = "./guests" + req.url + ".json"
    let data = ""
    req.on("data", (chunk) => data += chunk)

    req.on("end", async () => {
        try {
            if(req.method !== 'POST') {
                res.writeHead(400)
                res.end(JSON.stringify({error : "bad request"}))
                return
            }
            await writeFile(filename, data)
            res.writeHead(201)
            res.end((data))
        } catch (e) {
            res.writeHead(500)
            res.end(JSON.stringify({error : "server failed"}))
        }
    })
})

server.listen(port, ()=>{
    console.log("listening on port", port)
})