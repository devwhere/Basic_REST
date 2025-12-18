import express, { type Request, type Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World 3");
});

app.get("/test1", (req: Request, res: Response) => {
  let returnObj = {
    name: "Tui",
    age: 14,
    address: "CAMT",
  };
  res.send(returnObj);
});

app.get("/test2", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
