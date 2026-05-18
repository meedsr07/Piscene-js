function throttle(Fn , delay) {
    let lasttime= 0 
   return function(...args) {
    let now = Date.now()
    if (now - lasttime >= delay) {
        Fn(...args)
        lasttime = now
    }
   }
}



function opThrottle(Fn, delay, options = {}) {
    let timerId = null
    let lastArgs = null
    return function(...args){
        lastArgs = args
        if (timerId){
            return
        }
        if (options.leading){
            Fn(...lastArgs)
            lastArgs = null
        }
        timerId = setTimeout(function fire(){
            if(options.trailing && lastArgs){
                Fn(...lastArgs)
                lastArgs = null
                timerId = setTimeout(fire, delay)
            }else{
                timerId = null
            }
        }, delay)
    }
}