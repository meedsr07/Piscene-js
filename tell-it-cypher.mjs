import { readFile, writeFile } from "node:fs/promises";

const file = process.argv[2];
const mode = process.argv[3];
const output = process.argv[4];

const data = await readFile(file, "utf-8");

let result = "";

if (mode === "encode") {
    result = Buffer.from(data).toString("base64");
} else if (mode === "decode") {
    result = Buffer.from(data, "base64").toString("utf-8");
} 

const fileName = output || (mode === "encode" ? "cypher.txt" : "clear.txt");

await writeFile(fileName, result);
