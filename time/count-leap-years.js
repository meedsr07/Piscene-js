function countLeapYears(date) { 
    let newDate = new Date(date) 
    let year = newDate.getFullYear()  
    let leap = 0 ; 
    for (let  i = 1 ; i < year ; i++) {
        if (( i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            leap ++
        } 
    }
    return leap
}