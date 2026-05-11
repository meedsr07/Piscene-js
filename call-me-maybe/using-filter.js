function filterShortStateName(arr) {
  return   arr.filter(element => element.length < 7)
}


function filterStartVowel(arr) { 
    let vowel = ["a" , "o" , "i" , "u" , "e"]
    return arr.filter(word  => vowel.includes(word[0].toLowerCase()))
}


function filter5Vowels(arr) {
     let vowel = ["a" , "o" , "i" , "u" , "e"] 
    return  arr.filter(word => {
        let count = 0 ; 
        for (let i = 0 ; i < word.length ; i++) {
            if (vowel.includes(word[i].toLowerCase())) {
                count++
            }
        }
        if (count >= 5) {
            return word
        }
     })
}

function filter1DistinctVowel(arr) {
    let vowel = ["a" , "o" , "i" , "u" , "e"] 
    return arr.filter(word => {
        let v = [] ;
        for (let  i = 0 ; i < word.length ; i++ ) {
            
            if (vowel.includes(word[i].toLowerCase())) {
                let char = word[i].toLowerCase()
                if ((!v.includes(char))){
                    v.push(char)
                }
            }

        }
        if (v.length === 1) {
            return word
        }
    })
}

function multiFilter(arr) {
    let vowel = ["a" , "o" , "i" , "u" , "e"] 
    return arr.filter(obj => 
        (obj.capital.length >= 8 ) &&
        !(vowel.includes((obj.name[0]).toLowerCase())) &&
        (obj.tag.toLowerCase().split('').some(char => vowel.includes(char)) &&
        (obj.region !== "South")))
}

