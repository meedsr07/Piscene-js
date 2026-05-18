function interpolation({ step, start, end, callback, duration }) {
    let distance = (end -start)/step
    let time = duration/step 
    for (let i = 0 ; i < step ; i++) {
        setTimeout(()=> {
            let x = start + distance * i
            let y = time * (i +1)
            callback([x , y])
        }, time *(i +1))
    }
}

