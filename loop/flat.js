function flat(arr, depth = 1) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let elemnt = arr[i];

        if (Array.isArray(elemnt) && depth > 0) {
            res = res.concat(flat(elemnt, depth - 1));
        } else {
            res.push(elemnt);
        }
    }

    return res;
}

const arr = [1, [2, [3]]]
console.log(flat(arr))