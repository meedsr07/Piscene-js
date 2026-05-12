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

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// function totalCalories(obj) {
//     let res = 0 ;
//      let keys = Object.keys(obj) 
//      for (let i = 0 ; i < keys.length ; i++) {
//         let key = keys[i] 

//         if (Object.hasOwn(nutritionDB , key)) {
//             calories = nutritionDB[key].calories
//             res += (obj[key] * calories) / 100 
//         }
    

//      }
//      return res
// }

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }


function totalCalories(obj){
    return reduceEntries(obj,(acc,[key,value])=>{
        return acc+(nutritionDB[key].calories*value)/100
    },0)
}
