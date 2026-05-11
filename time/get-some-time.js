function firstDayWeek(weeknb , year) {
    let newdate = new Date(year + "-01-01") 
    let weekday = ((weeknb - 1) *7 )
    let days =newdate.getUTCDay() 
    
    if (days == 0 ) {
        days = 7
    } 

    if (days > 1 && weeknb !== 1 ) {
        newdate.setUTCDate(newdate.getUTCDate()-(days-1))
    }

  

    newdate.setUTCDate(newdate.getUTCDate() + weekday)

    let d = String(newdate.getUTCDate()).padStart(2 , '0')
    let m = String(newdate.getUTCMonth() + 1).padStart(2 ,'0')
    let y = String(newdate.getUTCFullYear()).padStart(4 , '0') 

    return d + '-' + m + '-' + y 

}