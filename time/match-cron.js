function matchCron(str , date) {
    let newdate = new Date(date) 
    let split = str.split(" ") 
    let datevalue = [
        newdate.getMinutes() , 
        newdate.getHours() , 
        newdate.getDate() , 
        newdate.getMonth() +1 , 
        newdate.getDay()
    ]

    for (let i = 0 ; i < split.length ; i++) {
        if (split[i]==="*") {
            continue
        }
        if (split[i] != datevalue[i] ) {
        return false
        }
    }
    return true
}