import express, { type Request, type Response } from "express";
import {
  getAllEvents,
  getEventByCategory,
  getEventById,
  addEvent,
} from "./services/EventService";

import type Event from "./models/Event";

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

// app.get("/events", (req: Request, res: Response) => {
//   res.json(events);
// });

app.get("/events", (req: Request, res: Response) => {
  if (req.query.category) {
    const category = req.query.category as string;
    const filteredEvents = getEventByCategory(category);
    res.json(filteredEvents);
  } else {
    res.json(getAllEvents());
  }
});

app.get("/events/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", (req: Request, res: Response) => {
  const newEvent: Event = req.body;
  addEvent(newEvent);
  res.json(newEvent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
