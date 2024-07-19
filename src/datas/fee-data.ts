export type FeeType = {
  id: number;
  program: string;
  age: string;
  tuition: number;
  registration: number;
  activity: number;
};

export type ServiceType = {
  id: number;
  title: string;
  price: string;
};

export const fees: FeeType[] = [
  {
    id: 1,
    program: "Nursery",
    age: "2 - 3 Years",
    tuition: 1686,
    registration: 162,
    activity: 12,
  },
  {
    id: 2,
    program: "Pre - Kindergartens",
    age: "3 - 4 Years",
    tuition: 2686,
    registration: 220,
    activity: 16,
  },
  {
    id: 3,
    program: "Kindergarten",
    age: "4 - 5 Years",
    tuition: 3686,
    registration: 340,
    activity: 20,
  },
];

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Before and After-School Care",
    price: "$120 / per month",
  },
  {
    id: 2,
    title: "Language Immersion Program",
    price: "$60 / per semester",
  },
  {
    id: 3,
    title: "Transportation (optional)",
    price: "$80 / per month",
  },
];
