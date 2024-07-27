import ExtracuricularCard from "@/components/elements/ExtraculicularCard";
import { AcademicFeatureType } from "@/datas/academic-data";
import {
  BookOpenText,
  ChartBar,
  PaintBrush,
  PuzzlePiece,
  Star,
  Sun,
} from "@phosphor-icons/react";

const features: AcademicFeatureType[] = [
  {
    id: 1,
    icon: <BookOpenText className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "Thematic Learning",
    desc: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    id: 2,
    icon: <ChartBar className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "STEAM Education",
    desc: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking.",
  },
  {
    id: 3,
    icon: <PuzzlePiece className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "Language Immersion",
    desc: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    id: 4,
    icon: <PaintBrush className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "Art and Creativity",
    desc: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    id: 5,
    icon: <Sun className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "Outdoor Education",
    desc: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    id: 6,
    icon: <Star className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />,
    title: "Play-Based Learning",
    desc: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

function Features() {
  return (
    <section id="benefit" className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Features
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Special Features
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-0 xl:gap-x-10 gap-y-20 xl:gap-y-20 mt-13 xl:mt-15">
        {features.map((feature: AcademicFeatureType) => (
          <ExtracuricularCard
            key={feature.id}
            id={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
