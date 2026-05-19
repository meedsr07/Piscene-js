import { readdir } from 'node:fs/promises';
const dirName = process.argv[2] || '.'

let files = await readdir(dirName)

console.log(files.length)