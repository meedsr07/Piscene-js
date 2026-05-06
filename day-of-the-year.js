function dayOfTheYear(date) {
    let newdate = new Date(date) 
    let year = newdate.getUTCFullYear()
    let startofyear = new Date(0)  
    startofyear.setUTCFullYear(year)
    
    let diff = newdate - startofyear 
    let msInDay = 1000*60*60*24
    return Math.floor((diff / (msInDay)) +1)
}
