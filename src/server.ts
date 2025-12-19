import express, { type Request, type Response } from "express";
const app = express();
const port = 3000;

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live music concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Technology",
    title: "AI Conference",
    description:
      "A conference about artificial intelligence and machine learning",
    location: "San Francisco",
    date: "2022-03-15",
    time: "09:00",
    petsAllowed: false,
    organizer: "Tech World",
  },
  {
    id: 3,
    category: "Sports",
    title: "Marathon",
    description: "Annual city marathon event",
    location: "Berlin",
    date: "2022-09-10",
    time: "06:00",
    petsAllowed: true,
    organizer: "Berlin Sports Club",
  },
  {
    id: 4,
    category: "Education",
    title: "Programming Workshop",
    description: "Hands-on workshop for beginner programmers",
    location: "Bangkok",
    date: "2023-01-20",
    time: "10:00",
    petsAllowed: false,
    organizer: "Code Academy",
  },
  {
    id: 5,
    category: "Food",
    title: "Street Food Festival",
    description: "Festival featuring local street food vendors",
    location: "Chiang Mai",
    date: "2023-02-05",
    time: "16:00",
    petsAllowed: true,
    organizer: "CM Food Network",
  },
  {
    id: 6,
    category: "Art",
    title: "Art Exhibition",
    description: "Modern art exhibition by local artists",
    location: "Paris",
    date: "2023-06-12",
    time: "11:00",
    petsAllowed: false,
    organizer: "Paris Art Society",
  },
];

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

app.get("/events", (req: Request, res: Response) => {
  res.json(events);
});

app.get("/event2", (req: Request, res: Response) => {
  const category = req.query.category;
  const filteredEvents = events.filter((event) => event.category === category);
  res.json(filteredEvents);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
