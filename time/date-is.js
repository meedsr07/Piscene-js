function isValid(date) {
    // check if the date is intanceof of Date or is a Number
  if ( date instanceof Date || typeof date === 'number') {
    // if hi is not nan 
    return !isNaN(new Date(date).getTime())
  }
  return false
} 


function isAfter(date1 , date2) {
    if (isValid(date1) && isValid(date2)) {
        if (date1 > date2) {
            return true
        }
    }
    return false 
}

function isBefore(date1 , date2) {
  if (isValid(date1) && isValid(date2)) {
    if (date2 > date1) {
        return true
    }

  }
  return false
}

   

function isFuture(date) {
    
    if (isValid(date)) {
        if (date > Date.now()) {
            return true
        }
    }
    return false
}




function isPast(date) {

    if (isValid(date)) {
        if (date < Date.now()) {
            return true
        }
    }
    return false 
}

