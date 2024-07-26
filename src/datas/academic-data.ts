import { ReactElement } from "react";
import AcademicOne from "@/assets/academic/academic-1.jpg";
import AcademicTwo from "@/assets/academic/academic-2.jpg";
import AcademicThree from "@/assets/academic/academic-3.jpg";

export type AcademicFeatureType = {
  id: number;
  icon: ReactElement;
  title: string;
  desc: string;
};

export type AcademicLearnType = {
  id: number;
  image: string;
  title: string;
  desc: string;
};

export const learns: AcademicLearnType[] = [
  {
    id: 1,
    image: AcademicOne,
    title: "Language Arts",
    desc: "Reading, writing, storytelling, and communication skills.",
  },
  {
    id: 2,
    image: AcademicTwo,
    title: "Mathematics",
    desc: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    id: 3,
    image: AcademicThree,
    title: "Science",
    desc: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    id: 4,
    image: AcademicThree,
    title: "Social Studies",
    desc: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    id: 5,
    image: AcademicTwo,
    title: "Arts and Crafts",
    desc: "Encouraging creativity through various art forms and crafts.",
  },
  {
    id: 6,
    image: AcademicOne,
    title: "Physical Education",
    desc: "Promoting physical fitness, coordination, and teamwork.",
  },
];
