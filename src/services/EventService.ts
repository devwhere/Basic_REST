import type Event from "../models/Event";

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

export function getEventByCategory(category: string): Event[] {
  const filteredEvents = events.filter((event) => event.category === category);
  return filteredEvents;
}

export function getAllEvents(): Event[] {
  return events;
}

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

export function addEvent(newEvent: Event): Event {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return newEvent;
}
