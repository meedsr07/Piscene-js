function defaultCurry(obj1) {
  return function (obj2) {
    let keys = Object.keys(obj1)
    let keyObj2 = Object.keys(obj2)
    let newObj = {}
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (Object.hasOwn(obj2, key)) {
        newObj[key] = obj2[key]
      } else {
        newObj[key] = obj1[key]
      }
    }
    for (let j = 0; j < keyObj2.length; j++) {
      let key = keyObj2[j]
      newObj[key] = obj2[key]
    }
    return newObj
  }

}

function mapCurry(Fn) {
  return function(personnel) {
    let newObj = {} 
    for (let key in personnel) {
      let [newkey , newvalue] = Fn([key , personnel[key]]) 
      newObj[newkey] = newvalue
    }
    return newObj
  }
}


function reduceCurry( Fn , acc ) { 
  return function(obj , init ) {
      acc = init
      let keys = Object.keys(obj)  
      for (let  i = 0 ; i < keys.length ; i++) {
        acc = Fn(acc , [keys[i] , obj[keys[i]]])
      }
      return acc
  }
}

function filterCurry(Fn) { 
  return  function(obj) {
    let newObj = {} 
    let keys = Object.keys(obj) 
    for (let i = 0 ; i < keys.length ; i++) {
      if (Fn([keys[i], obj[keys[i]]])) {
        newObj[keys[i]] = obj[keys[i]]
      }
    }
    return newObj
  }
}

function reduceScore(personnel , init = 0) { 
  let isForceUser = filterCurry((([k , v]) => v.isForceUser === true ))(personnel)
  return reduceCurry((acc , [k , v] ) =>(acc + v.pilotingScore + v.shootingScore))(isForceUser , init)
} 


function filterForce(personnel) {
  return filterCurry(([k , v]) => v.isForceUser && v.shootingScore >= 80 )(personnel)
}



function mapAverage(personnel) {
  return mapCurry(([k,v]) => {
    let averge = (v.pilotingScore + v.shootingScore)/2 
    // copier all the value of object and add the averge
    return [k , {...v , averageScore : averge}]
  } )(personnel)
} 