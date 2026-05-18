function debounce(Fn , delay) {
    let timer; 
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=> {
            Fn(...args)
        },delay)
    } 
}


function opDebounce(Fn , delay , option = {}) {
    let timer;
    return function(...args) {
        if ((!(timer)) && option.leading === true ) {
            Fn(...args)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            Fn(...args)
        }, delay)
    }
}