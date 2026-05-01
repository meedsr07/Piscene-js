function flat(arr) {
    let res = []; 
    for (let i = 0 ; i < arr.length ; i++) {
        let elemnt = arr[i] 
        if (Array.isArray(elemnt)) {
           for (let j = 0; j < elemnt.length; j++) {
                res.push(elemnt[j]); 
            }
        }else{
            res.push(elemnt)
        }
    }
    return res
}


const arr = [1, [2, [3]]]
console.log(flat(arr))