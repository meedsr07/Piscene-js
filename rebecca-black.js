function isFriday(date) {
    let newdate = new Date(date) 
    if (newdate.getDay() === 5) {
        return true
    }
    return false
}


function  isWeekend(date) {
    let newDate = new Date(date) 
    let day = newDate.getDay()
    if (day === 6 || day === 0) {
        return true
    }
    return false
}


function isLeapYear(date) {
    let newDate = new Date(date) 
    let year = newDate.getFullYear() 
    if ((year % 4 === 0 && year % 100 !==  0) || year% 400== 0 ) {
        return true
    }
    return false
}

function isLastDayOfMonth(date) {
    let newDate = new Date(date) 
    newDate.setDate(newDate.getDate() + 1)
    if (newDate.getDate() === 1) {
        return true
    } 
    return false
}