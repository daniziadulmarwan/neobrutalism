import VisionMisionCard from "@/components/elements/VisionMisionCard";
import VisionImage from "@/assets/vision.png";
import MisionImage from "@/assets/mision.png";

function VisionMission() {
  return (
    <section id="vision-mision" className="mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Mission & Visions
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Mission & Visions
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[100px]">
        <div className="grid grid-cols-2 gap-[60px]">
          <VisionMisionCard
            id={1}
            image={MisionImage}
            title="Mission"
            desc="At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
          />
          <VisionMisionCard
            id={2}
            image={VisionImage}
            imgWidth="w-[106px]"
            title="Vision"
            desc="Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
          />
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
