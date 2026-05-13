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

const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
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


