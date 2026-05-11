function sameAmount(str , regex1 , regex2) {
    
    let match1 = str.match(new RegExp(regex1  , "g") )
     let match2 = str.match(new RegExp(regex2 , "g"))
 
    if (match1 === null || match2 === null ) {
        return false
    }
    if ( match1.length != match2.length ) {
        
        return false
    }
    return true
}

