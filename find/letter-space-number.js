function letterSpaceNumber(str) {
    
    let regex = /[a-zA-Z]\s[0-9](?![a-z-A-Z\d])/g;
    let match  =str.match(regex) ; 
    if (match === null) {
        return [];
    }
    return match
}
