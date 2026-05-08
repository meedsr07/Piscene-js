import {colors} from "./fifty-shades-of-cold.data.js"
export function generateClasses() {

        const style  = document.createElement("style")
        let css = ""
        for (let color of colors ) {
            css += '.' + color + '{ background:' + color + "}" + "\n"   
        }

        style.textContent = css
        document.head.append(style)
}

export function generateColdShades() {
    for (let color of colors ) {
         const coldWords = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"] 
         if (coldWords.some(word => color.includes(word))) {
            const div = document.createElement('div') 
            div.className = color 
            div.textContent = color 
            document.body.append(div)
         }
    }
}

export function choseShade(color) {
    const divs = document.querySelectorAll('div') 
    for (let div of divs) {
        div.className = color
    }
}