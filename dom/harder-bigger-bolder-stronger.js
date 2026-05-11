export function generateLetters() {
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    for (let i = 0 ; i < 120 ; i++) {
        const element = document.createElement('div') 
        let randomIndx = Math.floor(Math.random() * letter.length)
        element.textContent = (letter[randomIndx]) 
        element.style.fontSize = (11 + i) + 'px'
        if ( i < 40) {
            element.style.fontWeight = 300 
        }else if (i < 80 ) {
             element.style.fontWeight = 400 
        }else  {
            element.style.fontWeight = 600 
        }
        
        document.body.append(element)
    }
    
}