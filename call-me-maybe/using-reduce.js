function adder(arr , init = 0) {
    return arr.reduce((res , element) => {
       return res + element
    } ,init)
}

function sumOrMul(arr , init = 0) {
     return arr.reduce((res , element) =>  {
        
        if (element % 2 === 0) {
            res*= element
        }else {
            res+=element
        }
        return res
    },init)
}


function funcExec(arr , init = 0) {
    return arr.reduce((res , func) => {
       return func(res)    
    },init)
}