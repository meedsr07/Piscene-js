import {styles} from "./pimp-my-style.data.js"
 let index = 0 ;
 let remove = false ;
export function pimp() {
const button = document.querySelector(".button")
if (!remove) {
    button.classList.add(styles[index])
    index++
    if (index === styles.length) {
        remove = true 
        button.classList.toggle('unpimp')
    }
}else  {
    button.classList.remove(styles[index])
    index--
    if (index === 0 ) {
        remove = false
        button.classList.toggle('unpimp')
    }
}
    
}