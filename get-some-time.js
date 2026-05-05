function firstDayWeek(nbr  , str){
    let date = new Date(str + "-01-01")
    let Days = date.getUTCDay()
    let weeks = 7*(nbr-1)
    if (Days == 0){
        Days = 7
    }
    if ( Days > 1 && nbr != 1){
        date.setUTCDate(date.getUTCDate()-(Days-1))
    }
    date.setUTCDate(date.getUTCDate() + weeks)
    let d = String(date.getUTCDate()).padStart(2,"0")
    let m = String(date.getUTCMonth()+1).padStart(2,"0")
    let y = String(date.getUTCFullYear()).padStart(4,"0")
    return d + "-"+ m + "-" + y
}