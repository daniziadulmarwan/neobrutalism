import EventImage1 from "@/assets/event_1.jpg";
import EventImage2 from "@/assets/event_2.jpg";

export type EventType = {
  id: number | string;
  image: string;
  title: string;
  desc: string;
};

export const events: EventType[] = [
  {
    id: 1,
    image: EventImage1,
    title: "Annual Sports Day",
    desc: "A day filled with friendly competition, team spirit, and sportsmanship.",
  },
  {
    id: 2,
    image: EventImage2,
    title: "Cultural Festivals",
    desc: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
  },
  {
    id: 3,
    image: EventImage1,
    title: "Art Exhibitions",
    desc: "Showcasing our students' artistic talents through exhibitions and displays.",
  },
  {
    id: 4,
    image: EventImage2,
    title: "Science Fair",
    desc: "A platform for budding scientists to present their innovative projects and experiments.",
  },
  {
    id: 5,
    image: EventImage1,
    title: "International Day",
    desc: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
  },
  {
    id: 6,
    image: EventImage2,
    title: "Graduation Ceremony",
    desc: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
  },
];
