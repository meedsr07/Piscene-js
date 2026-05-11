function citiesOnly(arr) {
    return arr.map(obj => obj.city)
}

function upperCasingStates(arr) { 
     return arr.map(elment => 
        elment.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
     )   
}

function fahrenheitToCelsius(arr) {
   return arr.map(elment => Math.floor((parseInt(elment) - 32) * 5/9) + '°C' )
    
}

function trimTemp(arr) {
        return arr.map(obj => {
            return {
                ...obj ,
                'temperature' : obj.temperature.replace(/\s/g , "")
            }
        })
}

function tempForecasts(arr) {
   return arr.map(elment =>  {
        let F = elment.temperature.replace(/\s/g , "")
        let temp = parseInt(F) ; 
        let C = Math.floor((temp - 32) * 5/9) 
        let city = elment.city.split(" ").map(word => (word[0].toUpperCase())+ word.slice(1) ).join(" ") 
        let state =  elment.state.split(" ").map(word => (word[0].toUpperCase())+ word.slice(1) ).join(" ")
        return C + "°Celsius in " + city +", " + state
    })
}


