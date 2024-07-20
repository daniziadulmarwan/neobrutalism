import ExtracuricularCard from "@/components/elements/ExtraculicularCard";
import {
  ChefHat,
  Flask,
  Lightning,
  MusicNotes,
  PaintBrush,
  PuzzlePiece,
} from "@phosphor-icons/react";

function Extracuricular() {
  return (
    <section id="benefit" className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Features
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Extracurricular Activities
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            At Little Learners Academy, we believe in nurturing well-rounded
            individuals. Our extracurricular activities offer a diverse range of
            experiences that complement our academic curriculum and encourage
            students to explore their interests and passions. We offer a wide
            array of extracurricular activities, including.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-0 xl:gap-x-10 gap-y-20 xl:gap-y-20 mt-[50px] xl:mt-[100px]">
        <ExtracuricularCard
          id={1}
          icon={<Lightning className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Sports and Athletics"
          description="Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
        />

        <ExtracuricularCard
          id={2}
          icon={<PaintBrush className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Art and Creativity"
          description="Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."
        />

        <ExtracuricularCard
          id={3}
          icon={<MusicNotes className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Music and Performing Arts"
          description="Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."
        />

        <ExtracuricularCard
          id={4}
          icon={<PuzzlePiece className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Language Clubs"
          description="Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
        />

        <ExtracuricularCard
          id={5}
          icon={<Flask className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Science Club"
          description="The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
        />

        <ExtracuricularCard
          id={6}
          icon={<ChefHat className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
          title="Cooking and Culinary Arts"
          description="Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."
        />
      </div>
    </section>
  );
}

export default Extracuricular;
