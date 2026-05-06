function sunnySunday(date) {
    let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let newDate = new Date(date) 
    let start = new Date("0001-01-01") 
    
    
    
    let diff = newDate -  start
   
    
    let totalday = diff/1000/60/60/24
    
    return weekday[totalday%6]

}

