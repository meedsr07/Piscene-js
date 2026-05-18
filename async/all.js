async function all(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let key of keys) {
        res[key] = await obj[key]

    }
    return res
}