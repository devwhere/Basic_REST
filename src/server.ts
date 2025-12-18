import express, { type Request, type Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  let returnObj = {
    name: "Tui",
    age: 14,
    address: "CAMT",
  };
  res.send(returnObj);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
