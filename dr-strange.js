function addWeek(input) {

    const days  = [
        'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday' , 'secondThursday' ,
        'secondFriday'  , 'secondSaturday', 'secondSunday'
    ]    
    // the starting reference date
    const start = new Date("0001-01-01") ; 
    // the input day
    const  date = new Date(input) ; 
      // the difference in milliseconds
    const diff = date - start ; 
        // convert milliseconds to days
    const day = Math.floor((diff/1000) /60 /60 / 24) ; 
    // return the day of 14-day in  week 
    return days[day%14]
}


function timeTravel({date , hour , minute , second }) {
    // new Date is creat a object ho has year and mounth and day and hour .... 
    // copier the object in  a new date 
    let newdate = new Date(date) 

    // setHours() sets the hour of a newdate object to a new value,
    newdate.setHours(hour) 
    newdate.setMinutes(minute)
    newdate.setSeconds(second) 

    return newdate
}



