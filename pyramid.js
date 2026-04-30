function pyramid(str, nb) { 
    let res = [];

    for (let i = 1; i <= nb; i++) {
        let line = "";

        
        for (let j = 0; j < nb - i; j++) {
            line += " ";
        }

        for (let k = 0; k < (2 * i - 1); k++) {
            line += str;
        }

        res.push(line);
    }

    return res.join("\n");
}
