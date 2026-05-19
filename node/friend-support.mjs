import http from "http";
import { readFile } from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  try {
    const name = req.url.slice(1);
    const data = await readFile('guests/'+name+'.json', "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(data);

  } catch (err) {

    res.setHeader("Content-Type", "application/json");

    if (err.code === "ENOENT") {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "guest not found" }));
    } 
    else {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});