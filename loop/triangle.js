function triangle( str , nb) {
let res =  [] ; 
for (let i = 1 ; i <= nb ; i++) {
   res.push(str.repeat(i))
}
let triangle =res.join("\n") ;
return triangle
}

console.log(triangle("#" , 4))