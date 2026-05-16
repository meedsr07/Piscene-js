async function queryServers(serverName, q) {
    let url1 = "/" + serverName + "?q=" + q
    let url2 = "/" + serverName + "_backup" + "?q=" + q
    return Promise.race([
        getJSON(url1), getJSON(url2)
    ])
}

async function gougleSearch(q) {
    const timeout = new Promise((_ , reject) => {
        setTimeout(()=> {
            reject(new Error('timeout'))
        },80)
    })
    const allPromis = Promise.all([
        queryServers("web" , q),
        queryServers("image" , q),
        queryServers("video" , q)
    ]).then(([web , image , video]) => ({web , image , video}))
    return Promise.race([allPromis , timeout])
}