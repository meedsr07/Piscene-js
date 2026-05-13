function filterEntries(obj, Fn) {
    let newObj = {}
    let keys = Object.entries(obj)
    for (let [k, v] of keys) {
        if (Fn([k, v])) {
            newObj[k] = v
        }
    }
    return newObj
}

function mapEntries(obj, Fn) {
    let newObj = {}
    let keys = Object.entries(obj)
    for (let [k, v] of keys) {
        let [newK, newV] = Fn([k, v])
        newObj[newK] = newV
    }
    return newObj
}

function reduceEntries(obj, Fn, acc) {

    let keys = Object.entries(obj)
    for (let [k, v] of keys) {
        acc = Fn(acc, [k, v])
    }
    return acc
}


function totalCalories(obj) {
    return reduceEntries(obj, (acc, [k, v]) => {
        return Number((acc + (nutritionDB[k].calories * v) / 100).toFixed(1))
    }, 0)
}

function lowCarbs(obj) {
    return filterEntries(obj, ([k, v]) => (((nutritionDB[k].carbs * v) / 100) < 50))
}

function cartTotal(obj) {
    let Objf = {}
    return mapEntries(obj, ([k, v]) => {
        // get the value of nutritionDB 
        let Db = nutritionDB[k]
        let newObj = {}
        for (let keyofDb in Db) {
            newObj[keyofDb] = Number(((Db[keyofDb] * v) / 100).toFixed(3))
        }
        return [k, newObj]
    })
}


