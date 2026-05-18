import { writeFile } from "node:fs/promises";

const argument = process.argv[2]

function revers(argument) {
    const split = argument.split(" ");
    const result = [];

    for (let i = 0; i < split.length; i++) {
        const word = split[i];
        const middle = Math.ceil(word.length / 2);

        const first = word.slice(0, middle);
        const second = word.slice(middle);

        result.push(second + first);
    }

    return result.join(" ");
}


writeFile("verydisco-forever.txt" , revers(argument))