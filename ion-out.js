function ionOut(str){
    let regex = /\w*t(?=ion)/g
    let match = str.match(regex) 
    if (match === null) {
        return []
    }

    return match
}