function letterSpaceNumber(str) {
    let regex = /[a-zA-Z]\s[0-9](?![a-z-A-Z\d])/g;
    return str.match(regex) ; 
}
console.log(letterSpace('He is 8 or 9 years old, not 10.'))