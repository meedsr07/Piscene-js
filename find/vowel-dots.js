 var vowels = /[AEIOUaeiou]/g; 
function vowelDots(str) {
    let res = "";
   if (str.length === 0) {
    return ""
   };
   
    let match = str.match(vowels)
    if (match === null) {
        return str
    }
    for (let i = 0 ; i < str.length ; i++) {
         let isvowels = false ;
        for( let j = 0; j < match.length ; j++ ) {
            if (str[i] === match[j]) {
                res +=  str[i] + "."
                isvowels = true ;
                break
            }
        }
       if (!isvowels) {
        res+= str[i]
       }
    }
    return res
}
